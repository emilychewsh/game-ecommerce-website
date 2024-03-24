import React from 'react'
import './header.css'

function Header() {

  return (
    <header>
        <a href='#' className='menu'>
            <i className='bi bi-controller'></i>
        </a>
        
        <div className='userItems'>
            <a href='#' className='icon'>
                <i className='bi bi-heart-fill'></i>
                <span className='like'>0</span>
            </a>
            <a href='#' className='icon'>
                <i className='bi bi-bag-fill'></i>
                <span className='like'>0</span>
            </a>
        </div>
    </header>
  )
}

export default Header