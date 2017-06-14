import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import MovieForm from './MovieForm';

const mockStore = configureStore();

const coverImage = 'http://example.com/coverimage.jpg';
const image = 'http://example.com/image.jpg';

const submitting = false;
const touched = false;
const error = null;
const reset = sinon.spy();
const onSaveResponse = Promise.resolve();
const handleSubmit = fn => fn;
const onSave = sinon.stub().returns(onSaveResponse);
const props = {
  onSave,
  submitting,
  fields: {
    title: {
      value: '',
      touched,
      error,
    },
    synopsis: {
      value: '',
      touched,
      error,
    },
  },
  handleSubmit,
  reset,
};

const store = mockStore(props);
const match = { params: {} };

describe('MovieForm', () => {
  const wrapper = mount(
    <Provider store={store}>
      <MovieForm
        match={match}
      />
    </Provider>,
  );

  wrapper.setState({
    coverImage,
    images: [coverImage, image],
  });

  it('should render', () => {
    expect(wrapper.find(MovieForm).exists()).to.be.true;
  });
});
