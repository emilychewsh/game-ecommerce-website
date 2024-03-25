import React from 'react'
import './shopBagItem.css'
import { Button } from 'react-bootstrap'

function ShopBagItem({game, index}) {
  return (
    <tr className='shopBagItem'>
      <th scope='row'>{index + 1}</th>
      <td>
        <img src={game.img} alt={game.title} className='img-fluid' />
      </td>
      <td>{game.title}</td>
      <td>{game.price.toFixed(2)}</td>
      <td><Button variant="primary">
          <i className='bi bi-trash'></i>
      </Button></td>
    </tr>
  )
}

export default ShopBagItem