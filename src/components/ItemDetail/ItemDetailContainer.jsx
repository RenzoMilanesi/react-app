import { useState, useEffect } from "react";
import productos from "../../data/data";
import { getSingleItem } from "../../Services/mockServices";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  async function getItemsAsync() {
    let respuesta = await getSingleItem();
    setProduct(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return (
    <div className='card'>
    <div className="card-img">
    <img src={product.imgurl} alt={product.title} />
    </div>
    <div className='card-detail'>
    <h3>{product.title}</h3>
    <p>${product.price}</p>
    <p>{product.description}</p>
    </div>
    <Button variant="outline-success">Ver más</Button>{' '}
    </div>
  );
}

export default ItemDetailContainer;