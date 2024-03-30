import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useContext, useEffect, useState } from 'react'
import './gameCard.css'
import { AppContext } from '../App';

function GameCard( {game} ) {

    // UseContext hook for adding games to wishlist and bag
    const {wishlist, setWishlist, bag, setBag} = useContext(AppContext)
    

    useEffect(() => {
        const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setBag(savedWishlist);
    }, [setWishlist]);

    
    //Fx to handle adding and removing games to wishlist
    const handleAddToWishlist = async (game) => {
      try {
          // Check if the game already exists in the wishlist
          if (wishlist.some((item) => item.id === game.id)) {
              console.log('Game already in wishlist');
              return;
          }
  
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

const handleRemoveFromWishlist = async (game) => {
    try {
        const response = await fetch(`http://localhost:3000/games/${game.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                active: false, // Set active attribute to false
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

    //Fx to handle adding games to bag
    const handleAddToBag = (game) => {
        // Check if the game is already in the bag
        if (bag.some(item => item.id === game.id)) {
            console.log('Game already in bag');
            return;
        }
        
        // Add the game to the bag
        const updatedBag = [...bag, game];
        setBag(updatedBag);
        localStorage.setItem('bag', JSON.stringify(updatedBag));
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
            </div>
        </div>
    )
}

export default GameCard
