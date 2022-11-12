import React from 'react'
import "./item.css"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Item(props) {
  return (
    <div className='card'>
    <div className="card-img">
    <img src={props.imgurl} alt={props.title} />
    </div>
    <div className='card-detail'>
    <h3>{props.title}</h3>
    <p>${props.price}</p>
    <p>{props.description}</p>
    </div>
    <Button variant="outline-success">Ver más</Button>{' '}
    </div>
  )
}
