import React from 'react';
import {shallow} from 'enzyme';
import App from '../app/components/App';

it('App render with a default text', () => {
  const checkbox = shallow(
      <App />
  );

  const homepage = checkbox.find(".brunch-homepage");
  expect(homepage.text()).toEqual('Brunch homepage');
});
