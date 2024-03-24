import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import './gameCard.css'

function GameCard( {game} ) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 overflow-hidden">
        <div className='gameCard'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={game.img} />
                <Card.Body>
                    <Card.Title className='gameTitle'>{game.title}</Card.Title>
                    <Card.Text className='gamePrice'>
                        {`A$ ${game.price}`}
                    </Card.Text>
                    <Button variant="primary">Add To Cart</Button>
                    <Button variant="primary" className='like'>
                        <i className='bi bi-heart-fill'></i>
                    </Button>
                </Card.Body>
            </Card>

            {/* <img src={game.img} alt={game.title} className='img-fluid' />
            <a href='#'>
                <i className='bi bi-heart-fill'></i>
            </a> */}
        </div>
    </div>
  )
}

export default GameCard


{/* <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="{games.id}" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
        </Card.Body>
        </Card> */}