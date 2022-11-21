import ItemCount from "../ItemCount/itemCount"


function ItemDetail({ product }) {
  return (
    <div className='card'>
    <div className="card-img">
    <img src={product.imgurl} alt={product.title} />
    </div>
    <div className='card-detail'>
    <h3>{product.title}</h3>
    <p>${product.price}</p>
    <p>{product.description}</p>
    <p>Categoria: {product.category}</p>
    <p>Stock: {product.stock}</p>
    </div>
    <ItemCount stock={product.stock}/>
    </div>
  );
}

export default ItemDetail;