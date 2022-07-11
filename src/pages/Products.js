import React, { useEffect, useState } from 'react'
import { Main, ProductsContainer } from '../styles/pages/Products.styles';
import { data } from '../utils/mockData';
import { ProductCard } from '../components/ProductCard';
import { useHistory } from "react-router-dom";


export const Products = () => {
  let history = useHistory();
  const [products, setProducts] = useState([])

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('userId'));
    if (!id) {
      history.push('/login')
    } else {
      setProducts(data.data.products.items)
    }
  }, [])

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
