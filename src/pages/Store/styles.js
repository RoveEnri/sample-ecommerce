import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 2em 2em 0em 2em;

  h2 {
    text-align: center;
  }

  .btn {
    float: right;
  }
`;

const SubWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  margin: 1em;
  height: 20em;
  width: 16em;
  padding: 2em;
  border: 1px solid #d3d3d3;
  border-radius: 5%;
  cursor: pointer;
  span {
    float: right;
  }
  img {
    opacity: 0.5;
    width: 12em;
  }
`;

const StoreStyles = { Wrapper, SubWrapper, ProductCard };

export default StoreStyles;
