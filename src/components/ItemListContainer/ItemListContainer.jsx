import Item from "./Item"
import productos from "../../data/data";
function ItemListContainer(){
    return(
        <div>
            {productos.map((product)=>{
                return(
                    <Item
                    key={product.id}
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