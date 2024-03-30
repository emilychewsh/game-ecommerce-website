import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
import { AppContext } from "../App"
import { Nav } from 'react-bootstrap'


function Header() {
    const {wishlist, bag} = useContext(AppContext)

    // Check if wishlist and bag are defined before accessing their length properties
    const wishlistCount = wishlist ? wishlist.length : 0;
    const bagCount = bag ? bag.length : 0;

  return (
    <header>
        <a href='#' className='menu'>
            <i className='bi bi-controller'></i>
        </a>
        
        <div className='userItems'>
            <NavLink to="/myWishlist" className='icon'>
                <i className='bi bi-heart-fill'></i>
                <span className='like'>{wishlistCount}</span>
            </NavLink>
            <NavLink to="/myBag" className='icon'>
                <i className='bi bi-bag-fill'></i>
                <span className='like'>{bagCount}</span>
            </NavLink>
        </div>
    </header>
  )
}

export default Header