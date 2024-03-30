import { Modal, Button } from 'react-bootstrap';
import React, { useState,useEffect, useContext } from 'react'
import './myBag.css'
import Header from '../components/Header'
import ShopBagItem from '../components/ShopBagItem'
import { AppContext } from '../App'

function MyBag( { games } ) {
  const [total, setTotal] = useState(0)
  const { wishlist, setWishlist, bag, setBag} = useContext(AppContext)
  const [showModal, setShowModal] = useState(false);

  // Function to calculate total payment
  const handleTotalPay = () => {
    let total = games
    .map(game => game.price)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toFixed(2)

    return total
  }

  // Calculate total payment when games change
  useEffect(() => {
    setTotal(handleTotalPay())
  }, [games])

  // Set bag and wishlist state when component mounts
  useEffect(() => {
    const savedBag = JSON.parse(localStorage.getItem('bag')) || [];
    setBag(savedBag);
  }, [setBag]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(savedWishlist);
    }, [setWishlist]);

  // Function to clear bag and display checkout modal
  const handleClearBag = () => {
    setBag([]); // Clear the bag by setting it to an empty array
    localStorage.removeItem('bag'); // Remove bag data from localStorage
    setShowModal(true);
  };

  // Function to close checkout modal
  const handleCloseModal = () => {
    setShowModal(false); // Close modal
  };

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
                    <a href='#' onClick={handleClearBag}>Check out
                          <i className='bi bi-wallet-fill'></i>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )
        }
      </section>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Successfully checked out items!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default MyBag