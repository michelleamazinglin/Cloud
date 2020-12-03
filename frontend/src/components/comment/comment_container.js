import {connect} from 'react-redux';
import {createComment} from '../../actions/comment_actions'
import CommentBox from './create_comment';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createComment: (data) => dispatch(createComment(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);

