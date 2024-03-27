import React, {useState, useEffect} from 'react'
import "./index.css"
import { NavLink, Outlet } from 'react-router-dom'
import navListData from '../data/navListData'
import NavListItem from './NavListItem'


function Index() {
  const [navData, setNavData] = useState(navListData)

  return (
    <div className='main'>
        <div className='index'>
          <div className="logo">
            <i className="bi bi-controller"></i>
            <span className="brand">Crux Games</span>
          </div>

          <ul className='nav'>
            {
              navData.map(item => (
                <NavListItem key={item.id} item={item} />
              ))
            }
          </ul>
          </div>
          <Outlet />
        </div>
  )
}

export default Index