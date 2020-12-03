import { RECEIVE_POSTS, RECEIVE_POST, RECEIVE_USER_POSTS, RECEIVE_NEW_POST } from '../actions/post_actions';
  
  const PostsReducer = (state = { all: {}, user: {}, new: undefined, one: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_POSTS:
        newState.all = action.posts.data;
        return newState;
      case RECEIVE_USER_POSTS:
        newState.user = action.posts.data;
        return newState;
      case RECEIVE_NEW_POST:
        newState.new = action.post.data
        return newState;
      case RECEIVE_POST:
        newState.one = action.post.data
        return newState;
      default:
        return state;
    }
  };
  
  export default PostsReducer;