import React from 'react'
import './deliveryCard.css'
import { Link } from 'react-router-dom'

const deliveryCard = props => (
  <div class='col-sm-4 col-12'>
    <div class='card'>
      <div class='card-body'>
        <h5 class='card-title'>{props.storeName}</h5>
        <p class='card-text'>
          A new delivery waiting to be picked up at {props.storeName}
        </p>
        <Link
          className='btn btn-success'
          to={`/deliveries/${props.deliveryId}`}
        >
          View Details
        </Link>
      </div>
    </div>
  </div>
)

export default deliveryCard
