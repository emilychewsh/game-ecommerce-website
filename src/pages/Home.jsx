import Card from 'react-bootstrap/Card'
import React from 'react'
import "./home.css"
import Header from '../components/Header'

function Home( {games} ) {

  return (
    
      <div className='banner'>
        <Header />

        <div className='cards'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="{games.id}" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
  )
}

export default Home

