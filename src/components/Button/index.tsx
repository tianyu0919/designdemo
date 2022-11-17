import React from 'react';
import { ButtonProps } from './types';
import './index.less';

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { children, ...args } = props;
  return (
    <>
      <button {...args}>{children}</button>
    </>
  )
}

export default {
  Button,
  myReact: React
};