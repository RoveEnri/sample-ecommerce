import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 2em 2em 0em 2em;

  h2 {
    text-align: center;
  }
`;

const SubWrapper = styled.div`
  margin: 2em;

  p {
    margin-top: -0.5em;
    margin-bottom: 1em;
    font-style: italic;

    img {
      cursor: pointer;
      width: 1em;
      vertical-align: top;
      margin-right: 0.5em;
    }
  }
`;

const uploadWrapper = styled.div`
  padding: 4em;
  img {
    opacity: 0.5;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
`;

const SaveButtonWrapper = styled.div`
  margin-top: 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductStyles = { Wrapper, SubWrapper, uploadWrapper, SaveButtonWrapper };

export default ProductStyles;
