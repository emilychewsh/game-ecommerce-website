import React, {useContext} from 'react'
import './header.css'
import { AppContext } from "../App"


function Header() {
    const {wishlist, bag} = useContext(AppContext)
  return (
    <header>
        <a href='#' className='menu'>
            <i className='bi bi-controller'></i>
        </a>
        
        <div className='userItems'>
            <a href='#' className='icon'>
                <i className='bi bi-heart-fill'></i>
                <span className='like'>{wishlist.length}</span>
            </a>
            <a href='#' className='icon'>
                <i className='bi bi-bag-fill'></i>
                <span className='like'>{bag.length}</span>
            </a>
        </div>
    </header>
  )
}

export default Header