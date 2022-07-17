import React, { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';
import { Main, LeftContainer, RightContainer, Tags, EmptyTag, DetailTag, GenericTag, Text, Title, Summary, CostText, CheckoutBtn } from '../styles/pages/Cart.styles';
import { data } from '../utils/mockData';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectCartProducts } from '../redux/slices/cartSlice';


export const Cart = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCartProducts);
  // const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('userId'));
    if (!id) {
      history.push('/login')
    } else {
      
      // const productsSlice = data.data.products.items.slice(0,5);
      // for (let item of productsSlice) {
      //   item['quantity'] = 1
      // }
      // setCartProducts(productsSlice)
    }
  }, [])


  const handlePlusOne = (itemId) => {
    const updatedCartProducts = cartProducts.map(cartProductObj => {
      if (itemId === cartProductObj.id) {
        return {
          ...cartProductObj,
          quantity: cartProductObj.quantity + 1
        };
      } else {
        return cartProductObj;
      }
    });
    // setCartProducts(updatedCartProducts);
  }

  const handleMinusOne = (itemId) => {
    const updatedCartProducts = cartProducts.map(cartProductObj => {
      if (itemId === cartProductObj.id && cartProductObj.quantity !== 1) {
        return {
          ...cartProductObj,
          quantity: cartProductObj.quantity - 1
        };
      } else {
        return cartProductObj;
      }
    });
    // setCartProducts(updatedCartProducts);
  }

  const totalItems = 1
  // cartProducts.reduce((sum, item) => {
  //   return sum + (item.quantity)
  // }, 0)

  const totalCost = 1
  // cartProducts.reduce((sum, item) => {
  //   return sum + (item.price * item.quantity)
  // }, 0).toFixed(2)


  console.log('cart-prods', cartProducts)

  return (
    <Main>
      <LeftContainer>
        <Title>Shopping cart</Title>
        <hr></hr>
        <Tags>
          <EmptyTag></EmptyTag>
          <DetailTag>
            <Text>Product details</Text>
          </DetailTag>
          <GenericTag>
            <Text>Quantity</Text>
          </GenericTag>
          <GenericTag>
            <Text>Price</Text>
          </GenericTag>
          <GenericTag>
            <Text>Total</Text>
          </GenericTag>
        </Tags>
        {cartProducts.map((item, i) => (
          <CartItem 
            key={i} 
            item={item} 
            handlePlusOne={handlePlusOne}
            handleMinusOne={handleMinusOne}
          />
        ))}
      </LeftContainer>
      <RightContainer>
        <Summary>
          <Title>Summary</Title>
          <p>Items {totalItems}</p>
          <CostText>Total Cost <br></br> ${totalCost}</CostText>
          <CheckoutBtn>Checkout</CheckoutBtn>
        </Summary>
      </RightContainer>
    </Main>
  )
}
