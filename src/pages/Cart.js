import React, { useEffect, useState } from 'react';
import { Main, LeftContainer, RightContainer } from '../styles/pages/Cart.styles';
import { data } from '../utils/mockData';

export const Cart = () => {

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const productsSlice = data.data.products.items.slice(0,5);
    setCartProducts(productsSlice)
  }, [])

  console.log('cartProducts', cartProducts)
  return (
    <Main>
      <LeftContainer></LeftContainer>
      <RightContainer></RightContainer>
    </Main>
  )
}
