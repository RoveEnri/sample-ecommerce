import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ButtonField, InputField } from 'components';
import { useSelector, useDispatch } from 'react-redux';

//styles and assets
import ProductStyles from './styles';
import { uploadImage } from 'assets';

//hooks and redux
import { cartAction } from '_redux';

export default function Product() {
  const navigate = useNavigate();
  const reduxDispatch = useDispatch();

  const [quantity, setQuantity] = React.useState(1);
  const products = useSelector(state => state.store.products);
  const index = useSelector(state => state.store.active_product);

  const selectedProduct = products[index];

  const onSaveProduct = () => {
    const payload = { ...selectedProduct, quantity };
    reduxDispatch(cartAction.addCartItem(payload));

    alert('Product successfully added to cart.');
    navigate(-1);
  };

  return (
    <ProductStyles.Wrapper>
      <h2>Product</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ButtonField title='Back' onClick={() => navigate(-1)} />
        <ButtonField title='Edit' onClick={() => navigate('/editproduct')} />
      </div>

      <ProductStyles.SubWrapper>
        <Row>
          <Col>
            <ProductStyles.uploadWrapper>
              <img src={uploadImage} alt='upload' />
            </ProductStyles.uploadWrapper>
          </Col>

          <Col>
            <h4>{selectedProduct?.name}</h4>
            <h4>{selectedProduct?.price} Php</h4>
            <em> {selectedProduct?.category.map(data => data + ', ')} </em>
            <h5>{selectedProduct?.description}</h5>
          </Col>
        </Row>
        <h5>{selectedProduct?.long_description}</h5>

        <ProductStyles.SaveButtonWrapper>
          <InputField
            label='Input Quantity'
            type='number'
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
          />
          <b> Total: P {quantity * selectedProduct?.price} </b>
          <ButtonField title='ADD TO CART' onClick={onSaveProduct} />
        </ProductStyles.SaveButtonWrapper>
      </ProductStyles.SubWrapper>
    </ProductStyles.Wrapper>
  );
}
