import { combineReducers } from 'redux';

import posts from './posts_reducer';
import comments from './comments_reducer';


const EntitiesReducer = combineReducers({
  posts,
  comments,
});

export default EntitiesReducer;
