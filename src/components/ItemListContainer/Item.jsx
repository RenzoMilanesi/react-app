import React from 'react'
import "./item.css"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
export default function Item(props) {
  const urlDetail=`/detail/${props.id}`
  
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
    <Link to={urlDetail}><Button variant="outline-success">Ver más</Button>{' '}</Link>
    
    </div>
  )
}
