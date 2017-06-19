import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteMovie, fetchMovie } from '../actions';
import { MovieDetailsContainer, MovieDetailsImage } from '../components';
import Button from '../components/common/Button';
import FlatButton from '../components/common/FlatButton';

class MovieDetails extends Component {
  /* istanbul ignore next */
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      selectedImage: 0,
    };

    this.renderImage = this.renderImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchMovie(id, (movie) => {
      if (movie) {
        const { images, coverImage } = movie;
        const selectedImage = images.indexOf(coverImage);
        this.setState({ selectedImage });
      }
    });
  }

  nextImage() {
    let { selectedImage } = this.state;
    const { images } = this.props.movie;

    if (selectedImage < images.length - 1) {
      selectedImage += 1;
      this.setState({ selectedImage });
    } else {
      selectedImage = 0;
      this.setState({ selectedImage });
    }
  }

  prevImage() {
    let { selectedImage } = this.state;
    const { images } = this.props.movie;

    if (selectedImage > 0) {
      selectedImage -= 1;
      this.setState({ selectedImage });
    } else {
      selectedImage = images.length - 1;
      this.setState({ selectedImage });
    }
  }

  deleteMovie(id) {
    this.props.deleteMovie(id);
    location.href = '#/';
  }

  renderImage(image, index) {
    const { selectedImage } = this.state;
    const { images } = this.props.movie;
    const showArrows = images.length > 1;

    if (index !== selectedImage) {
      return <span key={index} />;
    }

    return (
      <MovieDetailsImage
        key={index}
        prevImage={this.prevImage}
        nextImage={this.nextImage}
        image={image}
        showArrows={showArrows}
        alt={index}
      />
    );
  }

  render() {
    const { movie } = this.props;
    const { id, images, title, synopsis } = movie;

    return (
      <div className="movie-details">
        <MovieDetailsContainer>
          {_.map(images, this.renderImage)}
        </MovieDetailsContainer>
        <MovieDetailsContainer>
          <h1>{title}</h1>
          <p>{synopsis}</p>
          <div style={{ marginTop: 24 }}>
            <Button href={`#/edit-movie/${id}`}>
              EDIT
            </Button>
            <FlatButton
              onClick={() => this.deleteMovie(id)}
              danger
            >
              DELETE
            </FlatButton>
          </div>
        </MovieDetailsContainer>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  fetchMovie: PropTypes.func.isRequired,
};

function mapStateToProps({ movie }) {
  return { movie };
}

export default connect(mapStateToProps, {
  deleteMovie,
  fetchMovie,
})(MovieDetails);
