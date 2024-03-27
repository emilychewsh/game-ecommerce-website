import React, { useState,useEffect } from 'react'
import './myBag.css'
import Header from '../components/Header'
import ShopBagItem from '../components/ShopBagItem'

function MyBag( { games } ) {
  const [total, setTotal] = useState(0)

  const handleTotalPay = () => {
    let total = games
    .map(game => game.price)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toFixed(2)

    return total
  }

  useEffect(() => {
    setTotal(handleTotalPay())
  }, [games])

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
            <h2 style={{margin: 10}}>Your Bag is empty...</h2>
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

              <div className='row d-flex justify-content-between mt-5'>
                <div className='col-lg-2 align-items-center start'>
                  <p className='itemCount'>Total items: {games.length} </p>
                </div>

                <div className='col-lg-10 d-flex justify-content-end'>
                  <div className='payment'>
                    Total: {total}
                    <a href='#'>Check out
                          <i className='bi bi-wallet-fill'></i>
                    </a>
                  </div>
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