import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ButtonField, InputField } from 'components';
import { useDispatch } from 'react-redux';

//styles and assets
import ProductStyles from './styles';
import { uploadImage, removeIcon } from 'assets';

//hooks and redux
import { storeAction } from '_redux';
import useProductState from '_hooks/useProductState';

export default function AddProduct() {
  const reduxDispatch = useDispatch();
  const [category, setCategory] = React.useState('');
  const [product, setProduct] = useProductState();
  const navigate = useNavigate();

  const onRemoveCategory = index => {
    setProduct({ type: 'REMOVE_CATEGORY', payload: { index } });
  };

  const onSaveProduct = () => {
    reduxDispatch(storeAction.addProductStore(product));
    alert('Product successfully added.');
    setProduct({ type: 'RESET_STATE' });
  };

  return (
    <ProductStyles.Wrapper>
      <h2>Add Product</h2>
      <ButtonField title='Back' onClick={() => navigate(-1)} />

      <ProductStyles.SubWrapper>
        <Row>
          <Col>
            <ProductStyles.uploadWrapper>
              <img src={uploadImage} alt='upload' />
            </ProductStyles.uploadWrapper>
          </Col>

          <Col>
            <InputField
              label='Name'
              placeholder='Input product name'
              value={product.name}
              onChange={e =>
                setProduct({ type: 'FIELD_ONCHANGE', payload: { state: 'name', value: e.target.value } })
              }
            />
            <InputField
              type='number'
              label='Price'
              placeholder='Input product price'
              value={product.price}
              onChange={e =>
                setProduct({ type: 'FIELD_ONCHANGE', payload: { state: 'price', value: e.target.value } })
              }
            />
            <InputField
              label='Category'
              placeholder='Add product category'
              value={category}
              onChange={e => setCategory(e.target.value)}
              with_button={true}
              button_title='Add Category'
              onClick={() => {
                setCategory('');
                setProduct({
                  type: 'ADD_CATEGORY',
                  payload: { category: category }
                });
              }}
            />
            <p>
              Category Tags:{' '}
              {product.category.map((data, i) => (
                <span key={i}>
                  {data}
                  <img src={removeIcon} alt='remove' onClick={() => onRemoveCategory(i)} />
                </span>
              ))}
            </p>

            <InputField
              label='Description'
              placeholder='Input product short description'
              value={product.description}
              onChange={e =>
                setProduct({
                  type: 'FIELD_ONCHANGE',
                  payload: { state: 'description', value: e.target.value }
                })
              }
            />
          </Col>
        </Row>
        <InputField
          label='Complete Description'
          textarea
          row={6}
          placeholder='Input product complete description'
          value={product.long_description}
          onChange={e =>
            setProduct({
              type: 'FIELD_ONCHANGE',
              payload: { state: 'long_description', value: e.target.value }
            })
          }
        />
        <ProductStyles.SaveButtonWrapper>
          <ButtonField title='SAVE PRODUCT' onClick={onSaveProduct} />
        </ProductStyles.SaveButtonWrapper>
      </ProductStyles.SubWrapper>
    </ProductStyles.Wrapper>
  );
}
