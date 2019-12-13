import React from 'react';
import ReactDOM from 'react-dom';
import { render, wait, waitForElement } from '@testing-library/react';
import { getByTestId, getByText } from '@testing-library/dom'

import App from './App';
import AbcContainer from "./abc_container";

test('it is able to render',  () => {
  console.log("........................... it is able to render")
  const div = document.createElement('div');

  const {getByTestId} = render(<AbcContainer/>, div)
  const abcContainterElement = getByTestId('abc-container')
  expect(abcContainterElement).toBeInTheDocument()
  ReactDOM.unmountComponentAtNode(div);

})

test('after 1 second, the ref is created', async () => {
  console.log("........................... after 1 second, the ref is created")

  const div = document.createElement('div');

  const {getByText, getByTestId} = render(<AbcContainer/>, div)

  const abcContainerElement = getByTestId('abc-container')

  await wait(() => getByText(/the position of the box is 169.5,134/i))
  const words = getByText(/the position of the box is 169.5,134/i)
  expect(words).toBeInTheDocument()
  ReactDOM.unmountComponentAtNode(div);

})
