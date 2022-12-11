import { useState, createContext } from 'react';

export const cartContext = createContext();

export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);
  function addToCart(product, count) {
    const ItemAlreadyInCart = cart.findIndex(
      ItemsInCart => ItemsInCart.id === product.id
    );
    const newCart = [...cart];

    if (ItemAlreadyInCart !== -1) {
      newCart[ItemAlreadyInCart].count += count;
      setCart(newCart);
    } else {
      product.count = count;
      newCart.push(product);
      setCart(newCart);
    }
  }

  function removeItem(id) {
    console.log('Eliminando el item:', id);
    const newCart = [...cart];
    newCart.pop();
    setCart(newCart);
  }
  function clear() {
    setCart([]);
  }

  function ItemsInCart() {
    let total = 0;
    cart.forEach(ItemsInCart => (total = total + ItemsInCart.count));
    return total;
  }

  function priceInCart() {
    let precio = 0;
    cart.forEach(
      producto => (precio = precio + producto.price * producto.count)
    );

    return precio;
  }
  return (
    <>
      <cartContext.Provider
        value={{ ItemsInCart, addToCart, removeItem, priceInCart, cart, clear }}
      >
        {props.children}
      </cartContext.Provider>
    </>
  );
}
