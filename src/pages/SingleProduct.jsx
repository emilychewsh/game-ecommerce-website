// use Params
import React from 'react'
import { useParams } from 'react-router-dom'

function SingleProduct() {
    console.log(useParams())
  return (
    <div className='banner'>SingleProduct</div>
  )
}

export default SingleProduct