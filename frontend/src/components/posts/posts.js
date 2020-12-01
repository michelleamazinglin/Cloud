import React from 'react';
import { withRouter } from 'react-router-dom';
import PostBox from './post_box';
import NavBarContainer from '../nav/navbar_container'

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(newState) {
    this.setState({ posts: newState.posts });
  }

  render() {
      console.log(this.props.post)
    if (this.state.posts.length === 0) {
      return (<div>There are no Clouds</div>)
    } else {
      return (
        <div>
          <NavBarContainer />
          <h2>All Clouds</h2>
          {this.state.posts.map(post => (
            <PostBox key={post._id} body={post.body} />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Posts);