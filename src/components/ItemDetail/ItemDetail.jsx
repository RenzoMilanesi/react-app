import ItemCount from '../ItemCount/itemCount';
import { useContext, useState } from 'react';
import { cartContext } from '../../context/cartContext';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function ItemDetail({ product }) {
  const { addToCart } = useContext(cartContext);
  const [isInCart, setIsInCart] = useState(false);
  function onAddToCart(count) {
    setIsInCart(count);
    addToCart(product, count);
  }

  return (
    <div className='card'>
      <div className='card-img'>
        <img src={product.imgurl} alt={product.title} />
      </div>
      <div className='card-detail'>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <p>Categoria: {product.category}</p>
        <p>Stock: {product.stock}</p>
      </div>
      {isInCart ? (
        <Link to='/cart'>
          <Button variant='outline-success'>Ir al Carrito</Button>
        </Link>
      ) : (
        <ItemCount onAddToCart={onAddToCart} stock={product.stock} />
      )}
    </div>
  );
}
export default ItemDetail;
