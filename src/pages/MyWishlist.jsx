import React from 'react'
import GameCard from '../components/GameCard'

function MyWishlist( {games} ) {
  return (
    <>
      <div className='banner'>
        <section className='wishlist'>
          <div className='container-fluid'>
            <div className='row mb-3'>
              <h1>My Wishlist</h1>
            </div>


            <div className='row'>
              {
                games.length === 0 ? (
                  <h2>Your Wishlist is empty...</h2>
                ) : (
                  games.map(game => <GameCard key={game.id} game={game}/>)
                )
              }
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default MyWishlist