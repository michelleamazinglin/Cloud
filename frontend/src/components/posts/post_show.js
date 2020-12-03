import { connect } from 'react-redux';
import React from 'react';
import {fetchPostComments} from '../../actions/comment_actions';
import {fetchPost} from '../../actions/post_actions';
import CommentBoxContainer from '../comment/comment_container'

class PostShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            post: {},
            showComponent: ''
        }

       this.showTheReplyBox = this.showTheReplyBox.bind(this)
       this.areCommentsEqual = this.areCommentsEqual.bind(this)
    }


    componentDidMount() {

        this.props.fetchPost(this.props.post).then(postObj => {
            this.props.fetchPostComments(this.props.post).then((obj) => {
                if (obj === undefined) {
                    return null;
                }
                this.setState({
            comments: obj.comments.data,
            post: postObj
          });

            })
          
        });
        

    }
    
    showTheReplyBox(comment) {
        this.setState({
            showComponent: comment.commentBody
        })

    }

    areCommentsEqual(comment){
        return this.state.showComponent === comment.commentBody
    }


    render() {
        if (Object.values(this.state.post).length < 1) {
           return null;
        }

        return(
            <div>
                <h2>{this.state.post.post.data.body}</h2>
                    <ul>
                    {this.state.comments.map((comment, idx) => (
                        <div>
                      <li key={idx} onClick={() => this.showTheReplyBox(comment)}>{comment.commentBody}</li>
                      {this.areCommentsEqual(comment) ? 
                      <CommentBoxContainer postId={this.props.post}/> : null
                    }
                      </div>
                    ))}
                    </ul>
            </div>
        )
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