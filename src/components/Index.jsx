import React, {useState, useEffect} from 'react'
import "./index.css"
import { NavLink, Outlet } from 'react-router-dom'
import navListData from '../data/navListData'
import NavListItem from './NavListItem'


function Index() {
  const [navData, setNavData] = useState(navListData)
  const [games, setGames] = useState([])
  
  const fetchData = () => {
    fetch("http://localhost:5173/src/data/db.json")
      .then(res => res.json())
      .then(data => {
        setGames(data)
      })
      .catch(e => console.log(e.message))
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='main'>
      <div className='index'>
        <div className="logo">
          <i className="bi bi-controller"></i>
          <span className="brand">Humble Games</span>
        </div>

        <ul className='nav'>
          {
            navData.map(item => (
              <NavListItem key={item.id} item={item} games={games} />
            ))
          }
        </ul>
        </div>
        <Outlet />
    </div>
  )
}

export default Index