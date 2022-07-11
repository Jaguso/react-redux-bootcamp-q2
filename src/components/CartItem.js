import { Main, CartItemImg, Img, ProdDetail, Generic, Quantity, QuantityText, Button } from '../styles/components/CartItem.styles';


function CartItem(props) {
  const { item } = props;
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
          <Button onClick={() => props.setProductQuantity('minus', item.id)}>-</Button>
          <QuantityText>{item.quantity}</QuantityText>
          <Button onClick={() => props.setProductQuantity('plus', item.id)}>+</Button>
        </Quantity>
        <Button>Delete</Button>
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