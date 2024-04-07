import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import React, { useContext, useEffect, useState } from 'react'
import './gameCard.css'
import { AppContext } from '../App';

function GameCard( {game} ) {

    // UseContext hook for adding games to wishlist and bag
    const {wishlist, setWishlist, bag, setBag} = useContext(AppContext)
    //UseState hook to show Modal when item is already in Bag
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setBag(savedWishlist);
    }, [setWishlist]);

    //Handle message when user tries to click on "Add to Cart" again
    const handleCloseModal = () => {
        setShowModal(false) //Close modal
    }

    // Function to handle adding a game to the wishlist
    const handleAddToWishlist = async (game) => {
      try {
          // Check if the game already exists in the wishlist
          if (wishlist.some((item) => item.id === game.id)) {
              console.log('Game already in wishlist');
              return;
          }
          
          // Send PATCH request to update the active attribute to true
          const response = await fetch(`http://localhost:3000/games/${game.id}`, {
              method: 'PATCH',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  active: true, // Set active attribute to true
              }),
          });
          
          if (response.ok) {
              // Update the wishlist state only after successful response from the server
              const updatedWishlist = [...wishlist, { ...game, active: true }];
              setWishlist(updatedWishlist);
              localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); // Update localStorage
          } else {
              console.error('Failed to add game to wishlist');
          }
      } catch (error) {
          console.error('Error adding game to wishlist:', error);
      }
  };

   // Function to handle removing a game from the wishlist
    const handleRemoveFromWishlist = async (game) => {
        try {
            // Send PATCH request to update the active attribute to false
            const response = await fetch(`http://localhost:3000/games/${game.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    active: false // Set active attribute to false
                }),
            });
            if (response.ok) {
                // Check if wishlist is defined before using the some method
                if (wishlist && wishlist.some((item) => item.id === game.id)) {
                    // Filter out the removed game from wishlist
                    const updatedWishlist = wishlist.filter((item) => item.id !== game.id);
                    // Update the wishlist state with the updated array
                    setWishlist(updatedWishlist);
                    // Update localStorage with the updated wishlist
                    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
                }
            } else {
                console.error('Failed to remove game from wishlist');
            }
        } catch (error) {
            console.error('Error removing game from wishlist:', error);
        }
    };

    // Function to handle adding a game to the bag
    const handleAddToBag = (game) => {
        // Check if the game is already in the bag
        if (bag.some(item => item.id === game.id)) {
            setShowModal(true);
            return;
        }
        
        // Add the game to the bag
        const updatedBag = [...bag, game];
        setBag(updatedBag);
        localStorage.setItem('bag', JSON.stringify(updatedBag)); // Update localStorage
    };

    useEffect(() => {
        const savedBag = JSON.parse(localStorage.getItem('bag')) || [];
        setBag(savedBag);
    }, [setBag]);

    return (
        <div className="col-xl-3 col-lg-4 col-md-6">
            <div className='gameCard'>
                <Card
                bg="light"
                style= {{ width: '18rem' }}
                border='dark'
                >
                    <Card.Img variant="top" src={game.img} />
                    <Card.Body>
                        <Card.Title className='gameTitle'>{game.title}</Card.Title>
                        <Card.Text className='gamePrice'>
                            {`A$ ${game.price}`}
                        </Card.Text>
                        <Button variant="primary" 
                        onClick={() => handleAddToBag(game)}> 
                        {bag.some(item => item.id === game.id) ? 'Added To Cart!' : "Add To Cart"}
                        </Button>
                        
                        <Button variant="primary" 
                        className={`like ${wishlist.some(item => item.id === game.id) ? 'active' : ''}`} 
                        onClick={
                            wishlist.some(item => item.id === game.id) ? 
                            () => handleRemoveFromWishlist(game) :
                            () => handleAddToWishlist(game)
                        }>
                            <i className='bi bi-heart-fill'></i>
                        </Button>
                    </Card.Body>
                </Card>

                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Hi There</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Game is already in Bag!
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default GameCard
