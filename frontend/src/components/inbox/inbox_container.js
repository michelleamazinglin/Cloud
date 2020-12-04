import { connect } from 'react-redux';
import { fetchUserPosts, fetchPost } from '../../actions/post_actions';
import {fetchPostComments, fetchUserComments} from '../../actions/comment_actions';
import {fetchUser} from '../../actions/user_actions';
import Inbox from './inbox';

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.entities.posts.user),
    currentUser: state.session.user,
    comments: state.entities.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserPosts: id => dispatch(fetchUserPosts(id)),
    fetchPostComments: (id) => dispatch(fetchPostComments(id)),
    fetchUserComments: (userId) => dispatch(fetchUserComments(userId)),
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);