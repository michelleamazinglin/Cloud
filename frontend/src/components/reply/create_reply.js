import React from 'react'

class ReplyBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allReplies: [],
            showReplies: false,
            createReply: {
                replyBody: '',
                comment: this.props.commentId,
                user: this.props.currentUser.id
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            createReply: {...this.state.createReply, [field]: e.currentTarget.value}
            // [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let reply = Object.assign({}, this.state.createReply);
        this.props.createReply(reply).then(() => {
            this.setState({
                createReply: { ...this.state.createReply, replyBody: ''}
            })
        })
    }

    render() {
      
        
        return(

            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    value={this.state.createReply.replyBody}
                    onChange={this.update('replyBody')}
                    placeholder="Insert reply here :)"
                />
                <button>Reply</button>
            </form>

            
        // <div>       
        //     {this.state.allReplies.map((reply, idx) => (
        //         <li key={idx}>
        //             {reply.replyBody}
        //         </li>
        //     ))}
        // </div>
        )
    }
}

export default ReplyBox;