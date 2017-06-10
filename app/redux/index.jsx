import { combineReducers } from 'redux';
import typingDone from './typer';
import history from './history';
import typerText from './typingText'
import typerColor from './typerColor';

const rootReducer = combineReducers({
  typingDone,
  history,
  typerText,
  typerColor
});

export default rootReducer;
