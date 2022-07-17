import React, { useEffect, useState } from 'react'
import { Main, ProductsContainer, Loading } from '../styles/pages/Products.styles';
import { ProductCard } from '../components/ProductCard';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectAllProducts, getProducts, selectLoading } from '../redux/slices/productsSlice';


export const Products = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('userId'));
    if (!id) {
      history.push('/login')
    } else {
      dispatch(getProducts());
    }
  }, []);

  if (loading) {
    return (
      <Loading>
        <p>Loading...</p>
      </Loading>
    )
  }

  return (
    <Main>
      <ProductsContainer>
        {products.map((productObj, i) => (
          <ProductCard key={i} productObj={productObj}/>
        ))}
      </ProductsContainer>
    </Main>
  )
}
