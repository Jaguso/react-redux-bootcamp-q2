import { Main, ProductImg, InnerContainer, NameText, AddToCartBtn, InnerTop, InnerBottom, CatText, PriceText } from '../styles/components/ProductCard.styles';
import { addProductToCart } from '../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartProducts, addOneToQuantity } from '../redux/slices/cartSlice';


export const ProductCard = ({productObj}) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCartProducts);

  const handleAddToCart = (productObj) => {
    const productOnCart = cartProducts.find(item => item.id === productObj.id);
    if (productOnCart) {
      const dataForUpdate = {
        id: productObj.id,
        products: cartProducts
      }
      dispatch(addOneToQuantity(dataForUpdate))
    } else {
      dispatch(addProductToCart(productObj))
    }

  }

  const shortName = productObj.name.length> 38 ? `${productObj.name.slice(0,38)}...` : productObj.name;
  return (
    <Main>
      <InnerContainer>
        <InnerTop>
          <ProductImg src={productObj.images[0]} />
          <NameText>{shortName}</NameText>
        </InnerTop>
        <InnerBottom>
          <CatText>{productObj.categories[0]}</CatText>
          <PriceText>${productObj.price}</PriceText>
          <AddToCartBtn onClick={() => handleAddToCart(productObj)}>
            Add to cart
          </AddToCartBtn>
        </InnerBottom>
      </InnerContainer>
    </Main>
  )
}