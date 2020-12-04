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
      return (<div className="post-page">
                <NavBarContainer />
                <h3 className="no-clouds">There are no Clouds</h3>
               </div>)
    } else {
      let result = this.state.posts.filter((post) => {
        if (post.user !== this.props.currentUser.id) {
          return post
        }
      })
      return (
        <div className="post-page">
          <Modal />
          <NavBarContainer />
          <h2>Click on any cloud to see other user's feeling:</h2>
          <div className="cloud-container">
          {result.map(post => (
            
           <>
            <img src={happy} 
                onClick={() => this.props.openModal({name: 'openPost',
                                                        body: post.body})}
                                                        // this is the modal
                className="floating-cloud" 
                alt="logo" 
                width="150px"
              />
             </> 
          ))}
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Posts);


//class Posts extends React.Component {
// constructor(props) {
//   super(props);

//   this.state = {
//     posts: []
//   }
// }

// componentWillMount() {
//   this.props.fetchPosts();
// }

// componentWillReceiveProps(newState) {
//   this.setState({ posts: newState.posts });
// }

// render() {
//   if (this.state.posts.length === 0) {
//     return (<div className="post-page">
//       <NavBarContainer />
//       <h3 className="no-clouds">There are no Clouds</h3>
//     </div>)
//   } else {
//     return (
//       <div className="post-page">
//         <Modal />
//         <NavBarContainer />
//         <h2>Click on any cloud</h2>
//         <div className="cloud-container">
//           {this.state.posts.map(post => (
//             <>
//               <img src={happy}
//                 onClick={() => this.props.openModal({
//                   name: 'openPost',
//                   body: post.body
//                 })}
//                 // this is the modal
//                 className="floating-cloud"
//                 alt="logo"
//               />
//             </>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
// }