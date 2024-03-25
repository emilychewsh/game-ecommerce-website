import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useContext } from 'react'
import './gameCard.css'
import { AppContext } from '../App';

function GameCard( {game} ) {

    const {wishlist, setWishlist, bag, setBag} = useContext(AppContext)

    const handleAddToWishlist = game => {
        setWishlist([...wishlist, game])
    }

    const handleRemoveFromWishlist = game => {
        setWishlist(wishlist.filter(item=> item.id !== game.id))
    }

    return (
        <div className="col-xl-3 col-lg-4 col-md-6">
            <div className='gameCard'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={game.img} />
                    <Card.Body>
                        <Card.Title className='gameTitle'>{game.title}</Card.Title>
                        <Card.Text className='gamePrice'>
                            {`A$ ${game.price}`}
                        </Card.Text>
                        <Button variant="primary">Add To Cart</Button>
                        <Button variant="primary" className='like' 
                        onClick={
                            wishlist.includes(game) ? 
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
