import React, { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';
import { Main, LeftContainer, RightContainer, Tags, EmptyTag, DetailTag, GenericTag, Text, Title } from '../styles/pages/Cart.styles';
import { data } from '../utils/mockData';

export const Cart = () => {

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const productsSlice = data.data.products.items.slice(0,5);
    for (let item of productsSlice) {
      item['quantity'] = 1
    }
    setCartProducts(productsSlice)
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
    setCartProducts(updatedCartProducts);
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
    setCartProducts(updatedCartProducts);
  }


  console.log('cartProducts', cartProducts)
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
        <p>Summary</p>
        <p>Items</p>
        <p>Total Cost</p>
      </RightContainer>
    </Main>
  )
}
