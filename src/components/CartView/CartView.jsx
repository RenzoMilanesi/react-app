import { useContext } from "react"
import {cartContext} from "../../context/cartContext"
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";



export default function CartView() {
    //Falta algunas opciones como clear item del carrito, esta en cart Context removeItem,priceInCart,
    const {cart,clear}=useContext(cartContext)
    if(cart.length ===0) return <h1>Carrito Vacio</h1>
  return (
    <div>
        {
        cart.map((item) => 
        <div>
            <h2>{item.title}</h2>
            <h2>$ {item.price}</h2>
            <h2>Unidades: {item.count}</h2>
            
        </div>
        )
        }
        <Button variant="outline-primary" onClick={clear}>Vaciar Todooo</Button>
    </div>
  )
}
