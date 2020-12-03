import { connect } from 'react-redux';
import { fetchUserPosts } from '../../actions/post_actions';
import {fetchPostComments, fetchUserComments} from '../../actions/comment_actions';
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
    fetchUserComments: (userId) => dispatch(fetchUserComments(userId))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);