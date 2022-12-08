import { useState } from "react";
import { createContext } from "react";
/*Importamos E inicializamos el contexto con createContext*/
export const cartContext = createContext();

//2. Creamos nuestro Context Provider
export function CartContextProvider(props) {


  //3.Retornamos el Provider del context creado
  const [cart, setCart] = useState([]);
 //Agregado al carrito usando spread
  function addToCart(product, count) {
    //encuentra el index del item repetido en el cart para despues sumar su count con el actual   
    let ItemAlreadyInCart=cart.findIndex((ItemsInCart)=>ItemsInCart.id===product.id)
    let newCart=[...cart];
    
    if(ItemAlreadyInCart !==-1)//Si esta sumo sus cantidades
    {
      newCart[ItemAlreadyInCart].count+=count;
      setCart(newCart)
    }
    else//si no esta se agrega el item con el count seleccionado
    {
      product.count = count;
      newCart.push(product);
      setCart(newCart);
    }   
  }

//Completar removeri item
  function removeItem(id){
    cart.filter((id) => cart.id === id);
  }
  function clear(){}
  
  function ItemsInCart(){
    let total=0; 
    cart.forEach((ItemsInCart)=>(total=total+ItemsInCart.count))
    return total;
  }
  
/*No funciona revisar*/
  function priceInCart(){
    let precio=0; 
    cart.forEach((ItemsInCart)=>(precio=precio+(ItemsInCart.price*ItemsInCart.count)))
    console.log(precio)
    return precio;
    
  }
  return (
    <>
      <cartContext.Provider value={{ ItemsInCart, addToCart ,removeItem,priceInCart,cart,clear}}>
        {props.children}
      </cartContext.Provider>
    </>
  );
}

