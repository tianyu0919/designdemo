/*
 * @Author: 归宿
 * @Date: 2022-11-18 11:41:48
 * @Description: 
 */
import React from 'react';
import { ButtonProps } from './types';
// import './index.less';

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { children, ...args } = props;
  return (
    <>
      <button {...args}>{children}</button>
    </>
  )
}

export default Button;