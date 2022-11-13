

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
    </div>
    </div>
  );
}

export default ItemDetail;