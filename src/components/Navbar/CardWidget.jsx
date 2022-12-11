import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';

function CardWidget() {
  const miContext = useContext(cartContext);
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} />
      {miContext.ItemsInCart() !== 0 && <span>{miContext.ItemsInCart()}</span>}
    </div>
  );
}

export default CardWidget;
