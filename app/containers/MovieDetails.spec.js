import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import MovieDetails from './MovieDetails';
import { MovieDetailsContainer, MovieDetailsImage } from '../components';
import ArrowButton from '../components/movie-details/ArrowButton';
import FlatButton from '../components/common/FlatButton';

const coverImage = 'http://example.com/coverimage.jpg';
const image = 'http://example.com/image.jpg';

const mockStore = configureStore();
// const dispatch = sinon.spy();

const store = mockStore({
  movie: {
    id: '1',
    title: 'Movie Title',
    synopsis: 'Movie Synopsis',
    coverImage,
    images: [
      coverImage,
      image,
    ],
  },
});
const match = { params: {} };

describe('MovieDetails', () => {
  const wrapper = mount(
    <MovieDetails
      // dispatch={dispatch}
      store={store}
      match={match}
    />,
  );

  it('should render', () => {
    expect(wrapper.find(MovieDetails).exists()).to.be.true;
  });

  it('should render 2 containers', () => {
    expect(wrapper.find(MovieDetailsContainer).length).to.be.equal(2);
  });

  it('should render the cover image', () => {
    expect(wrapper.find(MovieDetailsImage).exists()).to.be.true;
    expect(wrapper.find(MovieDetailsImage).props().image).to.be.equal(coverImage);
  });

  it('should render the arrow buttons', () => {
    expect(wrapper.find(ArrowButton).length).to.be.equal(2);
  });

  it('should change the image on click in prev button', () => {
    wrapper.find(ArrowButton).first().simulate('click');
    expect(wrapper.find(MovieDetailsImage).props().image).to.be.equal(image);

    wrapper.find(ArrowButton).first().simulate('click');
    expect(wrapper.find(MovieDetailsImage).props().image).to.be.equal(coverImage);
  });

  it('should change the image on click in next button', () => {
    wrapper.find(ArrowButton).last().simulate('click');
    expect(wrapper.find(MovieDetailsImage).props().image).to.be.equal(image);

    wrapper.find(ArrowButton).last().simulate('click');
    expect(wrapper.find(MovieDetailsImage).props().image).to.be.equal(coverImage);
  });

  it('should delete the movie', () => {
    wrapper.find(FlatButton).simulate('click');
    expect(wrapper.find(MovieDetails).exists()).to.be.true;
  });
});
