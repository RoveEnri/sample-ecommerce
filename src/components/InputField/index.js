import ButtonField from 'components/ButtonField';
import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { InputStyle } from './styles';

export default function InputField({
  type,
  textarea,
  rows,
  label,
  placeholder,
  value,
  onChange,
  with_button,
  button_title,
  onClick
}) {
  return (
    <InputStyle>
      {label && label}
      <InputGroup>
        <FormControl
          type={type}
          as={textarea && 'textarea'}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {with_button && <ButtonField title={button_title} onClick={onClick} />}
      </InputGroup>
    </InputStyle>
  );
}
