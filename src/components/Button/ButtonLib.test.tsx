/**
 * @jest-environment jsdom
 */
import { cleanup, fireEvent, render } from '@testing-library/react';
import Button from './index';
import React from 'react';

afterEach(cleanup);

it('button', () => {
  const { queryByLabelText, getByLabelText } = render(
    <Button labelOn="On" labelOff="Off" onClick={() => { console.log(this) }}>哈哈</Button>
  );

  expect(queryByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy;

})