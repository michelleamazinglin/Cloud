import { connect } from 'react-redux';
import React from 'react';
import {fetchPostComments} from '../../actions/comment_actions';
import {fetchPost} from '../../actions/post_actions';
// import CommentBoxContainer from '../comment/comment_container'
import ReplyBoxContainer from '../reply/reply_container';
import { Link } from 'react-router-dom';
import '../style/post_show.css'


class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      post: {},
      showComponent: "",
    };

    this.showTheReplyBox = this.showTheReplyBox.bind(this);
    this.areCommentsEqual = this.areCommentsEqual.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.post).then((postObj) => {
      this.props.fetchPostComments(this.props.post).then((obj) => {
        if (obj === undefined) {
          return null;
        }
        this.setState({
          comments: obj.comments.data,
          post: postObj,
        });
      });
    });
  }

  showTheReplyBox(comment) {
    this.setState({
      showComponent: comment.commentBody,
    });
  }

  areCommentsEqual(comment) {
    return this.state.showComponent === comment.commentBody;
  }

  //<CommentBoxContainer postId={this.props.post}/>
  render() {
    if (Object.values(this.state.post).length < 1) {
      return null;
    }

    return (
      <div className="post-show-page">
        <Link to={'/inbox'} className="back-to-inbox">
          <img src="https://cdn.iconscout.com/icon/free/png-512/back-arrow-1767531-1502435.png" width="30px" height="30px"></img>
          <p>Back to Inbox</p>
        </Link>
          <h2>{this.state.post.post.data.body}</h2>
        <h3>Clouds Comments, Click to reply:</h3>
        <ul>
          {this.state.comments.map((comment, idx) => (
            <div>
              <li key={idx} onClick={() => this.showTheReplyBox(comment)}>
                {comment.commentBody}
              </li>
              
              {this.areCommentsEqual(comment) ? (
                <ReplyBoxContainer commentId={comment._id}/>
              ) : null}
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

const mSTP = (state, ownProps) => {
    return {
        post: ownProps.match.params.postId
    }
}

const mDTP = (dispatch) => {
    return {
        fetchPostComments: (postId) => dispatch(fetchPostComments(postId)),
        fetchPost: (postId) => dispatch(fetchPost(postId))

    }
}

export default connect(mSTP, mDTP)(PostShow);