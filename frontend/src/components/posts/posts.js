import React from 'react';
import { withRouter } from 'react-router-dom';
import PostBox from './post_box';
import NavBarContainer from '../nav/navbar_container';
import Modal from '../modal/modal';
import happy from '../images/happy_cloud.png';


// import Modal from '../modal/modal';

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
    if (this.state.posts.length === 0) {
      return (<div>
                <NavBarContainer />
                There are no Clouds
               </div>)
    } else {
      return (
        <div>
          <Modal />
          <NavBarContainer />
          <h2>All Clouds</h2>
          {this.state.posts.map(post => (
            <>
            <button onClick={() => this.props.openModal('openPost')}>
              <img src={happy} 
                className="nav-logo" 
                alt="logo" 
                width="80px" 
                height="auto"
              />
            </button>
            {/* <PostBox 
              post={this.props.post}
              key={post._id} 
              body={post.body}
              openModal={this.props.openModal}
             /> */}
             </>
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Posts);