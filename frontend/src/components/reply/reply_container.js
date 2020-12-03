import { connect } from 'react-redux';
import { createReply, fetchCommentreplies } from '../../actions/reply_actions'
import ReplyBox from './create_reply';

const mSTP = (state) => {
    return {
        currentUser: state.session.user
    }
}

const mDTP = (dispatch) => {
    return {
        createReply: (data) => dispatch(createReply(data)),
        fetchCommentreplies: (commentId) => dispatch(fetchCommentreplies(commentId))

    }
}

export default connect(mSTP, mDTP)(ReplyBox);