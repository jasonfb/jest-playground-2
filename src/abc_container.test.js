import React from 'react';
import { render, wait, waitForElement } from '@testing-library/react';
import App from './App';
import AbcContainer from "./abc_container";



test('it is able to render', () => {
  const {getByTestId} = render(<AbcContainer/>)
  const abcContainterElement = getByTestId('abc-container')
  expect(abcContainterElement).toBeInTheDocument()

})


test('after 1 second, the ref is created', async () => {
  const {getByText, getByTestId} = render(<AbcContainer/>)
  const abcContainerElement = getByTestId('abc-container')
  await wait(() => getByText(/the position of the box/i))
  const words = getByText(/the position of the box/i)
  expect(words).toBeInTheDocument()
})
