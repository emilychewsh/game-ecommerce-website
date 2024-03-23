import React, {useState} from 'react'
import "./sideMenu.css"
import { NavLink } from 'react-router-dom'
import navListData from '../data/navListData'
import NavListItem from './NavListItem'


function SideMenu() {
  const [navData, setNavData] = useState(navListData)

  return (
    <div className='sideMenu'>
      <div className="logo">
        <i className="bi bi-controller"></i>
        <span className="brand">Humble Games</span>
      </div>

      <ul className='nav'>
        {
          navData.map(item => (
            <NavListItem key={item.id} item={item}/>
          ))
        }
      </ul>
    </div>
  )
}

export default SideMenu