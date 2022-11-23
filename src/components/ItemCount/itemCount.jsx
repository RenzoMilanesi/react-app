import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemCount({ stock, onAddToCart }) {
  const [count, setCount] = useState(1);

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

/*  function onAddToCart() {
    console.log({ count }, "Item(s) agregado(s)");
  } */
  return (
    <div>
      <div>
        <Button variant="outline-primary" onClick={handleSubstract}>
          -
        </Button>
        <span>{count}</span>
        <Button variant="outline-danger" onClick={handleAdd}>
          +
        </Button>
      </div>
      <div className="itemcount_btns">
        <Button variant="outline-success" onClick={() => onAddToCart(count)}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}

export default ItemCount;
