import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Field,
  reduxForm,
  formValueSelector,
  change as changeFieldValue,
} from 'redux-form';
import { connect } from 'react-redux';
import { fetchMovie, addMovie, editMovie } from '../actions';
import { MovieFormImage, MovieField } from '../components';

const randomID = require('random-id');

const fields = [
  { type: 'file', name: 'images', label: 'Images' },
  { type: 'images' },
  { type: 'text', name: 'title', label: 'Title' },
  { type: 'textarea', name: 'synopsis', label: 'Synopsis' },
];

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length > 50) {
    errors.title = 'Must be 50 characters or less';
  }
  if (!values.synopsis) {
    errors.synopsis = 'Required';
  }
  return errors;
};

class MovieForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      coverImage: undefined,
      images: [],
      editMode: false,
      movieId: undefined,
    };

    this.addImage = this.addImage.bind(this);
    this.setCoverImage = this.setCoverImage.bind(this);
    this.removeImage = this.removeImage.bind(this);
    this.renderImage = this.renderImage.bind(this);
    this.renderFieldItem = this.renderFieldItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    const movieId = this.props.match.params.id;
    if (movieId) {
      this.props.fetchMovie(movieId, (movie) => {
        this.props.changeFieldValue('movieForm', 'title', movie.title);
        this.props.changeFieldValue('movieForm', 'synopsis', movie.synopsis);
        this.setState({ images: movie.images, coverImage: movie.coverImage });
      });
      this.setState({ editMode: true, movieId });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.path !== nextProps.match.path) {
      this.props.changeFieldValue('movieForm', 'title', '');
      this.props.changeFieldValue('movieForm', 'synopsis', '');
      this.setState({
        images: [],
        coverImage: undefined,
        editMode: false,
        movieId: undefined,
      });
    }
  }

  setCoverImage(image) {
    let { coverImage } = this.state;
    coverImage = image;
    this.setState({ coverImage });
  }

  addImage(image) {
    const { images } = this.state;
    const coverImage = this.state.coverImage || image;

    images.push(image);
    this.setState({ images, coverImage });
  }

  removeImage(index) {
    const { images } = this.state;
    let { coverImage } = this.state;
    const isCover = coverImage === images[index];

    images.splice(index, 1);

    if (isCover && images.length > 0) {
      coverImage = images[0];
    } else if (images.length === 0) {
      coverImage = undefined;
    }

    this.setState({ images, coverImage });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, synopsis } = this.props;
    const { images, coverImage, movieId, editMode } = this.state;

    const movie = {
      id: movieId || randomID(8),
      title,
      synopsis,
      coverImage,
      images,
    };

    if (editMode) {
      this.props.editMovie(movie);
    } else {
      this.props.addMovie(movie);
    }

    setTimeout(() => {
      location.href = '#/';
    }, 100);
  }

  renderImage(image, index) {
    const { coverImage } = this.state;

    return (
      <MovieFormImage
        key={index}
        setCover={this.setCoverImage}
        remove={this.removeImage}
        isCover={image === coverImage}
        image={image}
        index={index}
      />
    );
  }

  renderFieldItem(field, index) {
    const { type, name, label } = field;
    const { images } = this.state;

    if (type === 'images') {
      console.log(images);
      return _.map(images, this.renderImage);
    }

    return (
      <Field
        key={index}
        type={type}
        name={name}
        label={label}
        addImage={this.addImage}
        component={MovieField}
      />
    );
  }

  render() {
    const { anyTouched, valid, submitting } = this.props;
    const { images, editMode } = this.state;
    const disabled = !((anyTouched || editMode) && valid && images.length > 0 && !submitting);
    const buttonText = editMode ? 'EDIT MOVIE' : 'ADD MOVIE';

    return (
      <form onSubmit={this.handleSubmit}>
        {_.map(fields, this.renderFieldItem)}
        <div>
          <button
            style={{ marginTop: 12 }}
            disabled={disabled}
          >
            {buttonText}
          </button>
        </div>
      </form>
    );
  }
}

MovieForm.propTypes = {
  match: PropTypes.object.isRequired,
  anyTouched: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  addMovie: PropTypes.func.isRequired,
  editMovie: PropTypes.func.isRequired,
  fetchMovie: PropTypes.func.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  title: PropTypes.string,
  synopsis: PropTypes.string,
};

MovieForm.defaultProps = {
  title: undefined,
  synopsis: undefined,
};

const movieForm = reduxForm({
  form: 'movieForm',
  validate,
})(MovieForm);

const selector = formValueSelector('movieForm');
const movieComponent = connect((state) => {
  const title = selector(state, 'title');
  const synopsis = selector(state, 'synopsis');
  return {
    title,
    synopsis,
  };
}, {
  changeFieldValue,
  fetchMovie,
  addMovie,
  editMovie,
})(movieForm);

export default movieComponent;
