import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

export default function ButtonField({ title, onClick, isLoading }) {
  return (
    <Button onClick={onClick}>
      {isLoading ? <Spinner animation='border' size='sm' /> : <span>{title}</span>}
    </Button>
  );
}
