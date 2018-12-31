import { combineReducers } from 'redux';
import users from './users';
import decks from './decks';

export default combineReducers({
  users,
  decks
});
