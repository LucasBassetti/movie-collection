import { getStorageItem, setStorageItem } from '../services/storage';

export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';

let mvs = getStorageItem('movies');

if (mvs.length === 0) {
  mvs = [
    {
      id: '1',
      title: 'Pirates of the Caribbean: Dead Men Tell No Tales',
      coverImage: 'http://poltronanerd.com.br/wp-content/uploads/2017/03/poltrona-pirates_of_the_caribbean_dead_men_tell_no_tales--770x405.jpg',
      images: [
        'http://poltronanerd.com.br/wp-content/uploads/2017/03/poltrona-pirates_of_the_caribbean_dead_men_tell_no_tales--770x405.jpg',
        'http://www.sonic1029.com/wp-content/uploads/sites/3/2017/05/piratesofthecaribbean_header_v5_6489f07c.jpeg',
      ],
      synopsis: 'Captain Jack Sparrow searches for the trident of Poseidon while being pursued by an undead sea captain and his crew.',
    },
  ];

  setStorageItem('movies', mvs);
}

export function fetchMovie(id, callback) {
  const movies = getStorageItem('movies');
  const movie = movies.filter(m => m.id === id)[0];

  if (callback) { callback(movie); }

  return {
    type: FETCH_MOVIE,
    payload: movie || {},
  };
}

export function fetchMovies() {
  const movies = getStorageItem('movies');

  return {
    type: FETCH_MOVIES,
    payload: movies || [],
  };
}

export function addMovie(movie) {
  const movies = getStorageItem('movies');
  movies.push(movie);
  setStorageItem('movies', movies);

  return {
    type: ADD_MOVIE,
    payload: movies,
  };
}

export function editMovie(movie) {
  const movies = getStorageItem('movies');
  const index = movies.map(m => m.id).indexOf(movie.id);
  movies[index] = movie;
  setStorageItem('movies', movies);

  return {
    type: EDIT_MOVIE,
    payload: movies,
  };
}

export function deleteMovie(movieId) {
  const movies = getStorageItem('movies');
  const index = movies.map(m => m.id).indexOf(movieId);
  movies.splice(index, 1);
  setStorageItem('movies', movies);

  return {
    type: DELETE_MOVIE,
    payload: movies,
  };
}
