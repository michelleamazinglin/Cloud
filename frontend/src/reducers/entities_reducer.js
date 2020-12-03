import { combineReducers } from 'redux';

import posts from './posts_reducer';
import comments from './comments_reducer';
import replies from './replies_reducer';
import user from './user_reducer';


const EntitiesReducer = combineReducers({
  posts,
  comments,
  replies,
  user
});

export default EntitiesReducer;
