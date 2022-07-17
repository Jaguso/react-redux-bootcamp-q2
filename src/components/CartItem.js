import { Main, CartItemImg, Img, ProdDetail, Generic, Quantity, QuantityText, Button } from '../styles/components/CartItem.styles';
import { addOneToQuantity, restOneToQuantity, selectCartProducts, deleteProductFromCart }  from '../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';


function CartItem(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCartProducts);

  const dataForUpdate = {
    id: item.id,
    products: cartProducts
  }
  return (
    <Main>
      <Img>
        <CartItemImg src={item.images[0]}/>
      </Img>
      <ProdDetail>
        <p>{item.name}</p>
      </ProdDetail>
      <Generic>
        <Quantity>
          <Button onClick={() => dispatch(restOneToQuantity(dataForUpdate))}>-</Button>
          <QuantityText>{item.quantity}</QuantityText>
          <Button onClick={() => dispatch(addOneToQuantity(dataForUpdate))}>+</Button>
        </Quantity>
        <Button onClick={() => dispatch(deleteProductFromCart(dataForUpdate))}>Remove</Button>
      </Generic>
      <Generic>
        <p>${item.price}</p>
      </Generic>
      <Generic>
        <p>${(item.price * item.quantity).toFixed(2)}</p>
      </Generic>
    </Main>
  );
}

export default CartItem;