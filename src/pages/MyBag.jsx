import React from 'react'
import './myBag.css'
import Header from '../components/Header'
import ShopBagItem from '../components/ShopBagItem'

function MyBag( { games } ) {
  return (
    <div className='banner'>
      <Header />

      <section className='bag'>
        <div className='container-fluid'>
          <div className='row mb-3'>
            <h1>My Bag</h1>
          </div>
        </div>

        {
          games.length === 0 ? (
            <h2>Your Bag is empty</h2>
          ) :
          (
            <>
              <div className='row'>
                <div className='table-responsive'>
                  <table className='shopBagTable table table-borderless align-middle'>
                    <thead>
                      <tr>
                        <th scope='col'>No.</th>
                        <th scope='col'>Preview</th>
                        <th scope='col'>Game</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Remove</th>
                      </tr>
                    </thead>

                      <tbody>
                        {games.map((game, index )=> (
                          <ShopBagItem key={game.id} index={index} game={game}/>
                        ))}
                      </tbody>
                  </table>
                </div>

              </div>
            </>
          )
        }
      </section>
    </div>
  )
}

export default MyBag