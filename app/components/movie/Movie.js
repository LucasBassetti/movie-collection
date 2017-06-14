import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieContainer from './MovieContainer';
import Title from './Title';
import Synopsis from './Synopsis';

class Movie extends Component {
  /* istanbul ignore next */
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    };
  }

  render() {
    const { id, coverImage, title, synopsis } = this.props.movie;
    const { hover } = this.state;

    return (
      <MovieContainer
        href={`#/movies/${id}`}
        image={coverImage}
        onMouseOver={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <Title hover={hover}>{title}</Title>
        <Synopsis hover={hover}>{synopsis}</Synopsis>
      </MovieContainer>
    );
  }
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
