import React, { useEffect, useState } from 'react'
import { Main, ProductsContainer } from '../styles/pages/Products.styles';
import { data } from '../utils/mockData';
import { ProductCard } from '../components/ProductCard';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectAllProducts, getProducts } from '../redux/slices/productsSlice';


export const Products = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([])

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('userId'));
    if (!id) {
      history.push('/login')
    } else {
      setProducts(data.data.products.items)

      dispatch(getProducts());
    }
  }, [])

  const productsArr = useSelector(selectAllProducts) 
  console.log('prod-arr', productsArr)
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
