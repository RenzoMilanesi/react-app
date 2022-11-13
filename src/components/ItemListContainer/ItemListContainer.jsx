import { useState, useEffect } from "react";
import Item from "./Item"
import getItems from "../../Services/mockServices";
import {useParams} from "react-router-dom"
function ItemListContainer(){
    const [products, setProducts] = useState([]);
    const paramsUrl=useParams().id;
    

    async function getItemsAsync() {
        let respuesta = await getItems();
        setProducts(respuesta);
      }
    
      useEffect(() => {
        getItemsAsync();
      }, []);
    
      return(
        <div>
            {products.map((product)=>{
                return(
                    <Item
                    key={product.id}
                    id={product.id}
                    imgurl={product.imgurl}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    category={product.category}
                    />
                )
            })}

        </div>
    )
    
}
export default ItemListContainer;