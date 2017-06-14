import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';
import { Movie } from '../components';

class Movies extends Component {
  /* istanbul ignore next */
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentWillMount() {
    this.props.fetchMovies();
  }

  renderItem(movie) {
    return (
      <Movie
        key={movie.id}
        movie={movie}
      />
    );
  }

  render() {
    const { movies } = this.props;

    return (
      <div className="movies">
        {_.map(movies, this.renderItem)}
      </div>
    );
  }
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  fetchMovies: PropTypes.func.isRequired,
};

function mapStateToProps({ movies }) {
  return { movies };
}

export default connect(mapStateToProps, {
  fetchMovies,
})(Movies);
