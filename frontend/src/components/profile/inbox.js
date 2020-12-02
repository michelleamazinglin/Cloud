import React from 'react';
import PostBox from '../posts/post_box';

class Inbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            comments: [],
            boolean: false
        }
        this.showTheComments = this.showTheComments.bind(this);
        this.isPostEqualToComment = this.isPostEqualToComment.bind(this)
    
    }
    
    componentWillMount() {
        this.props.fetchUserPosts(this.props.currentUser.id)
    }

    componentWillReceiveProps(newState) {
        this.setState({ posts: newState.posts });
    }   

    showTheComments(postid, e) {
      e.preventDefault();
      this.props.fetchPostComments(postid).then(object => {
        console.log(object)
        this.setState({ comments: object.comments.data, boolean: true })
      })
    }

    isPostEqualToComment(postid, array){
      if (array.length < 1) {
        return null
      }
      else {
        return postid === array[0].post
      }
      
    }
 

    
    render() {
        if (this.state.posts.length > 0) {
          return (
            <div>
              <h2>All of This User's Clouds</h2>
              {this.state.posts.map((post) => (
                <div>
                  <PostBox key={post._id} body={post.body} />
                  {this.isPostEqualToComment(post._id, this.state.comments) ? this.state.comments.map((comment) => (
                        <div key={comment._id}>{comment.commentBody}</div>
                      ))
                    : null}
                  <button onClick={(e) => this.showTheComments(post._id, e)}>
                    show comments
                  </button>
                </div>
              ))}
            </div>
          );
        } else {
          return null
        }
      }
}

export default Inbox;