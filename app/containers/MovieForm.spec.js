import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Field } from 'redux-form';
import MovieForm from './MovieForm';
import { MovieField } from '../components';

const mockStore = configureStore();
const store = mockStore();
const match = { params: {} };

describe('MovieForm', () => {
  const wrapper = mount(
    <Provider store={store}>
      <MovieForm match={match} />
    </Provider>,
  );

  it('should render', () => {
    expect(wrapper.find(MovieForm).exists()).to.be.true;
  });

  it('should render 3 fields', () => {
    expect(wrapper.find(Field).length).to.be.equal(3);
    expect(wrapper.find(MovieField).length).to.be.equal(3);
  });
});
