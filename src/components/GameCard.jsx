import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import './gameCard.css'

function GameCard( {game} ) {
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
                    <Button variant="primary" className='like'>
                        <i className='bi bi-heart-fill'></i>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    </div>
  )
}

export default GameCard
