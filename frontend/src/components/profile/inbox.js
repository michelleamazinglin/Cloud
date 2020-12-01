import React from 'react';
import PostBox from '../posts/post_box';

class Inbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }
    
    componentWillMount() {
        console.log(this.props.currentUser.id)
        this.props.fetchUserPosts(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ posts: newState.posts });
    }   
    
    render() {
        if (this.state.posts.length === 0) {
          return (<div>This user has no Clouds</div>)
        } else {
          return (
            <div>
              <h2>All of This User's Clouds</h2>
              {this.state.posts.map(post => (
                <PostBox key={post._id} body={post.body} />
              ))}
            </div>
          );
        }
      }
}

export default Inbox;