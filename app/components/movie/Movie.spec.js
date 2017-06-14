import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Movie from './Movie';
import MovieContainer from './MovieContainer';
import Title from './Title';
import Synopsis from './Synopsis';

describe('Movie', () => {
  describe('Movie Component', () => {
    const movie = {
      id: 1,
      title: 'test title',
      synopsis: 'test synopsis',
    };
    const wrapper = mount(<Movie movie={movie} />);

    it('should render movie', () => {
      expect(wrapper.find(Movie).exists()).to.be.true;
    });

    it('should hover a movie container', () => {
      wrapper.find(MovieContainer).simulate('mouseover');
      expect(wrapper.node.state.hover).to.be.true;
    });

    it('should leave hover a movie container', () => {
      wrapper.find(MovieContainer).simulate('mouseleave');
      expect(wrapper.node.state.hover).to.be.false;
    });

    it('should render a movie with title "test title"', () => {
      expect(wrapper.find(Title).exists()).to.be.true;
      expect(wrapper.find(Title).text()).to.be.equal('test title');
    });

    it('should render a movi with synopsis "test synopsis"', () => {
      expect(wrapper.find(Synopsis).exists()).to.be.true;
      expect(wrapper.find(Synopsis).text()).to.be.equal('test synopsis');
    });
  });

  describe('Title Component', () => {
    it('should hover prop be true', () => {
      const wrapper = mount(<Title hover={true} />);
      expect(wrapper.find(Title).props().hover).to.be.true;
    });

    it('should hover prop be false', () => {
      const wrapper = mount(<Title hover={false} />);
      expect(wrapper.find(Title).props().hover).to.be.false;
    });
  });

  describe('Synopsis Component', () => {
    it('should hover prop be true', () => {
      const wrapper = mount(<Synopsis hover={true} />);
      expect(wrapper.find(Synopsis).props().hover).to.be.true;
    });

    it('should hover prop be false', () => {
      const wrapper = mount(<Synopsis hover={false} />);
      expect(wrapper.find(Synopsis).props().hover).to.be.false;
    });
  });
});
