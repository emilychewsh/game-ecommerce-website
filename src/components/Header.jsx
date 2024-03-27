import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
import { AppContext } from "../App"
import { Nav } from 'react-bootstrap'


function Header() {
    const {wishlist, bag} = useContext(AppContext)
  return (
    <header>
        <a href='#' className='menu'>
            <i className='bi bi-controller'></i>
        </a>
        
        <div className='userItems'>
            <NavLink to="/myWishlist" className='icon'>
                <i className='bi bi-heart-fill'></i>
                <span className='like'>{wishlist.length}</span>
            </NavLink>
            <NavLink to="/myBag" className='icon'>
                <i className='bi bi-bag-fill'></i>
                <span className='like'>{bag.length}</span>
            </NavLink>
        </div>
    </header>
  )
}

export default Header