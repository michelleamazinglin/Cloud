import React from 'react';

class CommentBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.currentUser.id,
            post: this.props.postId,
            commentBody: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }

    handleSubmit(e) {
        e.preventDefault();
        let comment = Object.assign({}, this.state);
        this.props.createComment(comment).then(() =>{
            this.setState({
                commentBody: ''
            })
        })
    }

    render(){
        return(
          <form onSubmit={this.handleSubmit}>
              {console.log(this.props)}
                <input type="text"
                  value={this.state.commentBody}
                  onChange={this.update('commentBody')}
                  placeholder="Insert reply here :)"
                />
              <button>Reply</button>
          </form>
        )
    }
}

export default CommentBox;