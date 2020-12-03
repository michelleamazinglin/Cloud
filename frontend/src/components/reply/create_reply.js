import React from 'react'

class ReplyBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allReplies: [],
            showReplies: false
        }
    }

    render() {
        if (this.state.showReplies === false) {
        this.props.fetchCommentreplies(this.props.commentId).then(replies => {
            this.setState({
                allReplies: replies.replies.data
            })
        })
    }
        
        return(
        <div>       
            {this.state.allReplies.map((reply, idx) => (
                <li key={idx}>
                    {reply.replyBody}
                </li>
            ))}
        </div>
        )
    }
}

export default ReplyBox;