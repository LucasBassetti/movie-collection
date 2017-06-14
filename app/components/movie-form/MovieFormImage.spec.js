import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { mount } from 'enzyme';
import MovieFormImage from './MovieFormImage';
import Options from './Options';
import Option from './Option';
import CloseOption from './CloseOption';

describe('MovieFormImage', () => {
  const image = 'http://example.com/image.jpg';
  const props = {
    image,
    isCover: true,
    index: 1,
    setCover: () => {},
    remove: () => {},
  };

  describe('Cover', () => {
    const wrapper = mount(<MovieFormImage {...props} />);

    it('should render movie', () => {
      expect(wrapper.find(MovieFormImage).exists()).to.be.true;
    });

    it('should render the cover image', () => {
      expect(wrapper.find(MovieFormImage).props().image).to.be.equal(image);
    });

    it('should render 2 options', () => {
      expect(wrapper.find(Options).exists()).to.be.true;
      expect(wrapper.find(Option).exists()).to.be.true;
      expect(wrapper.find(CloseOption).exists()).to.be.true;
    });

    it('should image be setted as cover', () => {
      expect(wrapper.find(Option).text()).to.be.equal('COVER');
    });
  });

  describe('Set Cover', () => {
    props.isCover = false;
    const wrapper = mount(<MovieFormImage {...props} />);

    it('should image not be cover', () => {
      expect(wrapper.find(Option).text()).to.be.equal('SET COVER');
    });
  });
});
