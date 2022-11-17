/*
 * @Author: 卢天宇
 * @Date: 2022-11-17 21:41:46
 * @Description: 
 */
import React from 'react';
import { createRoot } from 'react-dom/client';

const Home = () => {
  return (
    <>
      <div>nihao</div>
    </>
  )
}

console.log(document.querySelector('#root'));
const root = createRoot(document.querySelector('#root'));

root.render(<Home />);