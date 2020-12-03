import { combineReducers } from 'redux';

import posts from './posts_reducer';
import comments from './comments_reducer';
import replies from './replies_reducer';


const EntitiesReducer = combineReducers({
  posts,
  comments,
  replies,
});

export default EntitiesReducer;
