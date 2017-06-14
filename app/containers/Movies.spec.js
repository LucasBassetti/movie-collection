import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Movies from './Movies';
import { Movie } from '../components';

const coverImage = 'http://example.com/coverimage.jpg';
const image = 'http://example.com/image.jpg';

const mockStore = configureStore();

const store = mockStore({
  movies: [
    {
      id: '1',
      title: 'Movie Title',
      synopsis: 'Movie Synopsis',
      coverImage,
      images: [
        coverImage,
        image,
      ],
    },
    {
      id: '2',
      title: 'Movie Title 2',
      synopsis: 'Movie Synopsis 2',
      coverImage,
      images: [
        coverImage,
        image,
      ],
    },
  ],
});

describe('Movies', () => {
  const wrapper = mount(
    <Movies
      store={store}
    />,
  );

  it('should render', () => {
    expect(wrapper.find(Movies).exists()).to.be.true;
  });

  it('should render 2 movies', () => {
    expect(wrapper.find(Movie).length).to.be.equal(2);
  });
});
