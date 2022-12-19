/*
 * @Author: 归宿
 * @Date: 2022-11-22 11:24:38
 * @Description: 
 */
import React, { useState } from 'react';
import { CheckboxProps } from './types';


export default function CheckboxWithLabel({ labelOn, labelOff }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {isChecked ? labelOn : labelOff}
    </label>
  );
}