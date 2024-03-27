import React, {useContext} from 'react'
import './shopBagItem.css'
import { Button } from 'react-bootstrap'
import { AppContext } from '../App'

function ShopBagItem({game, index}) {
  
  const {bag, setBag} = useContext(AppContext)
  const handleRemoveFromBag = (game) => {
    setBag(bag.filter(item=> item.id !== game.id))
  }

  return (
    <tr className='shopBagItem'>
      <th scope='row'>{index + 1}</th>
      <td>
        <img src={game.img} alt={game.title} className='img-fluid' />
      </td>
      <td>{game.title}</td>
      <td>{game.price.toFixed(2)}</td>
      <td><Button variant="primary" onClick={() => handleRemoveFromBag(game)}>
          <i className='bi bi-trash'></i>
      </Button></td>
    </tr>
  )
}

export default ShopBagItem