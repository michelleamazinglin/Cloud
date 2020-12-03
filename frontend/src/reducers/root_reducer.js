import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reduer';
import posts from './posts_reducer';
import comments from './comments_reducer';
import replies from './replies_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  posts,
  comments,
  replies
});

export default RootReducer;

