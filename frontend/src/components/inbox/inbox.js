import React from 'react';
import PostBox from '../posts/post_box';
import NavBarContainer from '../nav/navbar_container'
import {Link} from 'react-router-dom';
import '../style/inbox.css'


class Inbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            comments: [],
            boolean: false,
            commentedOnPostsBody: [],
            username: ''
        }
        this.showTheComments = this.showTheComments.bind(this);
        this.isPostEqualToComment = this.isPostEqualToComment.bind(this)
    
    }
    
    componentWillMount() {
      // so little time we did great, we dont have ttim to change schema so this is the way we find username without resracture everything.
        this.props.fetchUserPosts(this.props.currentUser.id)
        // ⬇ dont do it next time
        this.props.fetchUserComments(this.props.currentUser.id).then(comments => {
        comments.comments.data.forEach(comment => {
          // for each comment we fetch post of comment
          this.props.fetchPost(comment.post).then(post => {
            // for each post, we fetch the user of the post
            this.props.fetchUser(post.post.data.user).then((user) => {
              // then for the user
              // oldArr = arr for all users commented on that post
              let oldArr = this.state.commentedOnPostsBody;
              // ⬇ everything we want to display on the page
              let obj = {body: post.post.data.body, username: user.user.data.username, postId: post.post.data._id}
              // ⬇ make sure no duplicate
              // making muti ajax is bad for runtime (not good pratice)
              let count = 0
            if (oldArr.length < 1) {
              oldArr.push(obj)
            }
            else {
              oldArr.forEach((oldObj) => {
                if (oldObj.body === obj.body ) {
                  count += 1
                }
                
              })
              if (count === 0) {
                oldArr.push(obj)
              }
             
            }
            this.setState({
              commentedOnPostsBody: oldArr,
              // username: user.user.data.username

            })
          // }
            })
       
            
          })
        })
        })
    }

    componentWillReceiveProps(newState) {
        this.setState({ posts: newState.posts });
    }   

    showTheComments(postid, e) {
      e.preventDefault();
      this.props.fetchPostComments(postid).then(object => {
        // console.log(object)
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
            <div className="inbox-page">
              <NavBarContainer />
              <div className="inbox-container">
                <div className="user-clouds">
                  <h2>All of This User's Clouds:</h2>
                  {this.state.posts.map((post, idx) => (
                      <Link key ={idx} to={{
                        pathname: `/posts/${post._id}`
                        }} > <PostBox key={post._id} body={post.body} /> 
                        </Link> 
                  ))}
                </div>
                <div className="commented-clouds">
                   <h2>All of commented Clouds:</h2>
                    {this.state.commentedOnPostsBody.map((obj, idx) => (
                    <div className="commented-list">
                      <Link key ={idx} to={`/posts/${obj.postId}`}>{obj.username}: {obj.body}</Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="inbox-page">
              <NavBarContainer />
              <p className="inbox-intro">Initiate Your Inbox By Writing A Cloud!</p>

            </div>
            )
        }
      }
}

export default Inbox;