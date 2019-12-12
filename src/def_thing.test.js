import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import DefThing from './def_thing'

test('renders a box and expects a ref', () => {

  const fakeRef = React.createRef()
  const { getByText } = render(<DefThing ref={fakeRef}/>);

});
