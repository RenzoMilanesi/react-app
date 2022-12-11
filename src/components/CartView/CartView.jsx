import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createOrder } from '../../Services/firebase';
import { useNavigate } from 'react-router-dom';
import CartForm from './CartForm';
import './CartView.css';

export default function CartView() {
  let navigate = useNavigate();
  const { cart, clear, priceInCart, removeItem } = useContext(cartContext);
  if (cart.length === 0) return <h1>Carrito Vacio</h1>;

  async function handleCheckout(evt, data) {
    const order = {
      buyer: {
        name: data.name,
        email: data.email,
        phone: data.phone,
      },
      items: cart,
      total: priceInCart(),
      date: new Date(),
    };
    const orderId = await createOrder(order);
    navigate(`/thankyou/${orderId}`);
  }

  return (
    <div>
      {cart.map(item => (
        <div key={item.id} className='card'>
          <div className='card-img'>
            <img src={item.imgurl} alt={item.title}></img>
          </div>
          <h2>{item.title}</h2>
          <h2>$ {item.price}</h2>
          <h2>Unidades: {item.count}</h2>
          <Button onClick={removeItem} variant='outline-danger'>
            X
          </Button>
        </div>
      ))}
      <div>
        <h3>total a pagar:{priceInCart()}</h3>
        <CartForm onSubmit={handleCheckout} />
        <Button variant='outline-primary' onClick={clear}>
          Vaciar Todooo
        </Button>
      </div>
    </div>
  );
}
