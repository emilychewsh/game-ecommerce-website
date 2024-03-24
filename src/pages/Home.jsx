import React from 'react'
import "./home.css"
import Header from '../components/Header'
import GameCard from '../components/GameCard'

function Home( {games} ) {

  return (
    
      <div className='banner'>
        <Header />

        <div className='row'>
          {
            games.map(game => (
              <GameCard key={game.id} game={game} />
            ))
          }
        </div>
      </div>
  )
}

export default Home

