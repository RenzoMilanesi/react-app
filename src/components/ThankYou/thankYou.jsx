import { useParams } from 'react-router-dom';

function ThankYou() {
  const idOrder = useParams().idOrder;

  return (
    <div style={{ color: 'black' }}>
      <h1>Gracias por tu compra</h1>
      <h3>Tu orden de compra es : {idOrder}</h3>
    </div>
  );
}

export default ThankYou;
