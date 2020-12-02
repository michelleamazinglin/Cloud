import React from 'react';
import PostBox from './post_box';
import NavBarContainer from '../nav/navbar_container'


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
        <div>
            <NavBarContainer />
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="textarea"
                        value={this.state.body}
                        onChange={this.update()}
                        placeholder="Write your cloud..."
                    />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <br />
            <PostBox text={this.state.newPost} />
        </div>
    )
  }
}

export default PostCompose;