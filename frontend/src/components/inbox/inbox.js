import React from 'react';
import PostBox from '../posts/post_box';
import NavBarContainer from '../nav/navbar_container'


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
          return (
            <>
            <NavBarContainer />
            <p>This user has no Clouds</p>
            </>
          )
        } else {
          return (
            <div>
              <NavBarContainer />
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