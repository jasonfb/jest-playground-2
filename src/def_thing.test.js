import React from 'react';

import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { getByTestId, getByText } from '@testing-library/dom'

import App from './App';

import DefThing from './def_thing'

test('renders a box and expects a ref', () => {
  const div = document.createElement('div');

  const fakeRef = React.createRef()
  const { getByText } = render(<DefThing ref={fakeRef}/>, div);

});
