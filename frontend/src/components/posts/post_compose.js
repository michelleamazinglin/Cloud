import React from 'react';
import PostBox from './post_box';
import NavBarContainer from '../nav/navbar_container'
import '../style/post_form.css';

class PostCompose extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          body: "",
          newPost: ""
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
      this.setState({newPost: nextProps.newPost.body});
  }

  handleSubmit(e) {
    e.preventDefault();
    let post = {
      body: this.state.body
    };

    this.props.composePost(post); 
    this.setState({body: ''})
  }

  update() {
    return e => this.setState({
      body: e.currentTarget.value
    });
  }

  render() {
    return (
        <div class="post-form-page">
            <NavBarContainer />
            <form onSubmit={this.handleSubmit} className="post-form">
                <div className="post-form-content">
                    <textarea
                        value={this.state.body}
                        onChange={this.update()}
                        placeholder="Write your cloud here..."
                        className="post-form-input"
                    />
                    <button className="post-form-submit">Submit</button>
                </div>
            </form>
            <div className="post-form-output">
              <PostBox body={this.state.newPost}>
              </PostBox>
            </div>
        </div>
    )
  }
}

export default PostCompose;