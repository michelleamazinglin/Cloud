import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBarContainer from '../nav/navbar_container';
import Modal from '../modal/modal';
import happy from '../images/happy_cloud.png';
import '../style/posts_page.css'


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
            <img src={happy} 
                onClick={() => this.props.openModal({name: 'openPost',
                                                        body: post.body})}
                                                        // this is the modal
                className="floating-cloud" 
                alt="logo" 
                width="80px" 
                height="auto"
              />
             </>
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Posts);