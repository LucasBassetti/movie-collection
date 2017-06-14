import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
  const wrapper = mount(<App />);

  it('should render', () => {
    expect(wrapper.find(App).exists()).to.be.true;
  });
});
