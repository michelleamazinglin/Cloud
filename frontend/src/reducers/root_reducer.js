import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reduer';
import entities from './entities_reducer';
import ui from './ui_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  entities,
  ui,
});

export default RootReducer;

