import { useState, useEffect } from "react";
import { getSingleItem } from "../../Services/mockServices";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();


  async function getItemsAsync() {
    let respuesta = await getSingleItem(id);
    setProduct(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return <ItemDetail product={product} />; 
    
  
}

export default ItemDetailContainer;