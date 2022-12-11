import { useState, useEffect } from "react";
import { getSingleItem } from "../../Services/firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "../loaders/loader"
function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  async function getItemsAsync() {
    let respuesta = await getSingleItem(id);
    setProduct(respuesta);
    setIsLoading(false);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);
  
  
  if(isLoading) 
  return <Loader/>
  
  
  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
