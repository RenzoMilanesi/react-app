import ItemCount from "../ItemCount/itemCount";
import {useContext,useState} from  "react"
import {cartContext} from "../../context/cartContext"




function ItemDetail({ product }) {
  const { addToCart } = useContext(cartContext);
  const{isInCart,setIsInCart}=useState(false)
  function onAddToCart(count) {
    alert(`Agregaste ${count} items al carrito!`);
    /* setState(count) */
    addToCart(product, count);
  }

  return (
    <div className="card">
      <div className="card-img">
        <img src={product.imgurl} alt={product.title} />
      </div>
      <div className="card-detail">
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <p>Categoria: {product.category}</p>
        <p>Stock: {product.stock}</p>
      </div>
      <ItemCount stock={product.stock} onAddToCart={onAddToCart}/>
    </div>
  );

}
export default ItemDetail;
