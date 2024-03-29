import React, { useContext, useEffect } from 'react'
import GameCard from '../components/GameCard'
import Header from '../components/Header'
import { AppContext } from '../App';

function MyWishlist( {games} ) {
  const { wishlist, setWishlist } = useContext(AppContext);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(savedWishlist);
  }, [setWishlist]);
  
  return (
    <>
      <div className='banner'>
        <Header />
        <section className='wishlist'>
          <div className='container-fluid'>
            <div className='row mb-3'>
              <h1>My Wishlist</h1>
            </div>
            <div className='row'>
              {wishlist.length === 0 ? (
                <h2>Your Wishlist is empty...</h2>
              ) : (
                wishlist.map((game) => <GameCard key={game.id} game={game} />)
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default MyWishlist