import { useState, useEffect } from "react";
import Item from "./Item";
import getItems from "../../Services/mockServices";
import { useParams } from "react-router-dom";
function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  async function getItemsAsync() {
    let respuesta = await getItems(idCategory);
    setProducts(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, [idCategory]);

  return (
    <div>
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            id={product.id}
            imgurl={product.imgurl}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            stock={product.stock}
          />
        );
      })}
    </div>
  );
}
export default ItemListContainer;
