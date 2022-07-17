import React, { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';
import { Main, LeftContainer, RightContainer, Tags, EmptyTag, DetailTag, GenericTag, Text, Title, Summary, CostText, CheckoutBtn } from '../styles/pages/Cart.styles';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectCartProducts } from '../redux/slices/cartSlice';


export const Cart = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCartProducts);

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('userId'));
    if (!id) {
      history.push('/login')
    }
  }, []);

  const totalItems = cartProducts.reduce((sum, item) => {
    return sum + (item.quantity)
  }, 0)

  const totalCost = cartProducts.reduce((sum, item) => {
    return sum + (item.price * item.quantity)
  }, 0).toFixed(2)


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
