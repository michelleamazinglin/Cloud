import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import Posts from './posts';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
  // debugger
  return {
    posts: Object.values(state.entities.posts.all)
    // post: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    openModal: (modal) => dispatch(openModal(modal)),
    // modal is an object
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);