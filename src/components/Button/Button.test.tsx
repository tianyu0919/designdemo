/*
 * @Author: 归宿
 * @Date: 2022-11-21 14:43:34
 * @Description:
 */
// const sum = (a: number, b: number): number => a + b;

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// })
import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';

it('changes the class when hovered', () => {
  const component = renderer.create(
    <Button onClick={() => { console.log(this) }}>xx</Button>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  renderer.act(() => {
    if (tree && !Array.isArray(tree)) {
      tree.props.onClick();
    }
  });

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})