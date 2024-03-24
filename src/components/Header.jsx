import React from 'react'

function Header() {
  return (
    <header>
        <a href='#' className='menu'>
            <i className='bi bi-sliders'></i>
        </a>
        
        <div className='userItems'>
            <a href='#' className='icon'>
                <i className='bi bi-heartfill'></i>
                <span className='like'>0</span>
            </a>
            <a href='#' className='icon'>
                <span className='like'>0</span>
            </a>
        </div>
    </header>
  )
}

export default Header