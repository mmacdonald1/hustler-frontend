import { combineReducers } from 'redux';
import users from './users';
import decks from './decks';
import cards from './cards';

export default combineReducers({
  users,
  decks,
  cards
});
