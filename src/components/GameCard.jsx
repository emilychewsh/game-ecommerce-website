import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useContext, useEffect, useState } from 'react'
import './gameCard.css'
import { AppContext } from '../App';

function GameCard( {game} ) {

    // UseContext hook for adding games to wishlist and bag
    const {wishlist, setWishlist, bag, setBag} = useContext(AppContext)


    //Fx to handle adding and removing games to wishlist
    const handleAddToWishlist = game => {
        setWishlist([...wishlist, game])
        
    }

    const handleRemoveFromWishlist = game => {
        setWishlist(wishlist.filter(item=> item.id !== game.id))
    }

    //Fx to handle adding games to bag
    const handleAddToBag = game => {
        if (bag.includes(game)) return;
        setBag([...bag, game])
    } 

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
                        <Button variant="primary" onClick={() => handleAddToBag(game)}> 
                        {bag.includes(game) ? 'Added To Cart!' : "Add To Cart"}</Button>
                        <Button variant="primary" className={`like ${wishlist.includes(game) ? 'active' : undefined}`} 
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
