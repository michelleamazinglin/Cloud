import React from 'react';
import PostBox from '../posts/post_box';
import NavBarContainer from '../nav/navbar_container'
import {Link} from 'react-router-dom';


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
            <div>
              <NavBarContainer />
              <h2>All of This User's Clouds</h2>
              {this.state.posts.map((post, idx) => (
                  <Link key ={idx} to={{
                    pathname: `/posts/${post._id}`
                    }} > <PostBox key={post._id} body={post.body} /> 
                    </Link> 
              ))}
            </div>
          );
        } else {
          return null
        }
      }
}

export default Inbox;