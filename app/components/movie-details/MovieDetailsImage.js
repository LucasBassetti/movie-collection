import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageContainer from './ImageContainer';
import ArrowButton from './ArrowButton';
import PrevIcon from '../common/PrevIcon';
import NextIcon from '../common/NextIcon';

class MovieDetailsImage extends Component {
  renderArrowIcon(arrow, index) {
    const { icon, isNext, func } = arrow;

    return (
      <ArrowButton
        key={index}
        onClick={() => func()}
        isNext={isNext}
      >
        {icon}
      </ArrowButton>
    );
  }

  render() {
    const { image, showArrows } = this.props;
    const arrows = [
      { icon: <PrevIcon />, isNext: false, func: this.props.prevImage },
      { icon: <NextIcon />, isNext: true, func: this.props.nextImage },
    ];

    return (
      <ImageContainer
        image={image}
      >
        {
          showArrows &&
          _.map(arrows, this.renderArrowIcon)
        }
      </ImageContainer>
    );
  }
}

MovieDetailsImage.propTypes = {
  image: PropTypes.string.isRequired,
  showArrows: PropTypes.bool.isRequired,
  prevImage: PropTypes.func.isRequired,
  nextImage: PropTypes.func.isRequired,
};

export default MovieDetailsImage;
