import React, { useContext, useEffect } from 'react'
import GameCard from '../components/GameCard'
import Header from '../components/Header'
import { AppContext } from '../App';

function MyWishlist( {games} ) {
  const { wishlist, setWishlist } = useContext(AppContext);

  // Effect hook to load wishlist from local storage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || []; // Retrieving wishlist from local storage
    setWishlist(savedWishlist); // Updating wishlist state
  }, [setWishlist]); // Dependency array ensures effect runs only when setWishlist changes
  
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