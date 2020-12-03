import React from 'react'

class ReplyBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allReplies: []
        }
    }

    render() {
    //comments.replies.data
        // this.props.fetchCommentreplies(this.props.commentId).then(comments => {
        //     console.log(comments)
        // })
        this.props.fetchCommentreplies(this.props.commentId).then(replies => {
            this.setState({
                allReplies: replies.replies.data
            })
        })
        
        return(
        <div>       
            {this.state.allReplies.map((reply, idx) => (
                <li>
                    {reply.replyBody}
                </li>
            ))}
        </div>
        )
    }
}

export default ReplyBox;