import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import movie from './reducer_movie';
import movies from './reducer_movies';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  movie,
  movies,
});

export default rootReducer;
