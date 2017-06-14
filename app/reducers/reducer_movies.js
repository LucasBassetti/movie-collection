import { FETCH_MOVIES, ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_MOVIES:
    case ADD_MOVIE:
    case EDIT_MOVIE:
    case DELETE_MOVIE:
      return action.payload;
    default:
      return state;
  }
}
