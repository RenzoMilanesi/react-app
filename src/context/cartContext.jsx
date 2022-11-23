import { useState } from "react";
import { createContext } from "react";
/*Importamos E inicializamos el contexto con createContext*/
export const cartContext = createContext();

//2. Creamos nuestro Context Provider
export function CartContextProvider(props) {
  const ItemsInCart = 3;
  
  //3.Retornamos el Provider del context creado
  const [cart,setCart]=useState([])
  function addToCart(product,count){
    console.log(product,count)
  }
  return (
    <>
      <cartContext.Provider value={{ItemsInCart,addToCart}}>
        {props.children}
      </cartContext.Provider>
    </>
  );
}

