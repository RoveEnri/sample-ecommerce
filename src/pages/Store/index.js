import React from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { ButtonField } from 'components';

import { uploadImage } from 'assets';
import StoreStyles from './styles';
import { storeAction } from '_redux';

const ProductCard = ({ product, onClick }) => {
  return (
    <StoreStyles.ProductCard onClick={onClick}>
      <img src={uploadImage} alt='upload' />
      <hr />
      <h5>
        {product.name} <span>{product.price} Php</span>
      </h5>
      {product.description}
    </StoreStyles.ProductCard>
  );
};

export default function Store() {
  const navigate = useNavigate();
  const reduxDispatch = useDispatch();

  const store = useSelector(state => state.store);

  const onSelectProduct = index => {
    reduxDispatch(storeAction.setActiveProduct(index));
    navigate('/product');
  };

  return (
    <StoreStyles.Wrapper>
      <h2>STORE</h2>
      <ButtonField title='Add Product' onClick={() => navigate('/addproduct')} />

      <StoreStyles.SubWrapper>
        {store.products.map((product, i) => (
          <ProductCard key={i} product={product} onClick={() => onSelectProduct(i)} />
        ))}
      </StoreStyles.SubWrapper>
    </StoreStyles.Wrapper>
  );
}
