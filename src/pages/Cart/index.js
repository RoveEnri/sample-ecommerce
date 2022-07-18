import React from 'react';

import { Table } from 'react-bootstrap';
import CartStyles from './styles';

import { useSelector } from 'react-redux';

export default function Cart() {
  const header = ['Product Name', 'Unit Price', 'Quantity', 'Total'];

  const cart = useSelector(state => state.cart.items);

  const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  return (
    <CartStyles.Wrapper>
      <h2>CART</h2>
      <CartStyles.SubWrapper>
        <Table striped bordered>
          <thead>
            <tr>
              {header.map((value, i) => (
                <th key={i}>{value}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cart.map((product, i) => (
              <tr key={i}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.quantity * product.price}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={3}>TOTAL</td>
              <td>{total}</td>
            </tr>
          </tbody>
        </Table>
      </CartStyles.SubWrapper>
    </CartStyles.Wrapper>
  );
}
