import React from 'react'
import { NavLink } from 'react-router-dom'

function NavListItem({ item }) {
  return (
    <li>
        <NavLink className={item.name} to={item.path}>
            <span className={`bi ${item.icon}`}> {item.name} </span>
        </NavLink>
    </li>
  )
}

export default NavListItem