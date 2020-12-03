import React from 'react'

class ReplyBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allReplies: [],
            showReplies: false,
            buttonLabel: 'Show All Replies',
            createReply: {
                replyBody: '',
                comment: this.props.commentId,
                user: this.props.currentUser.id
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showTheReplies = this.showTheReplies.bind(this)
        this.anonUsers = this.anonUsers.bind(this)
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
            // console.log(this.state.allReplies)
            // console.log(reply)
            let oldArr = this.state.allReplies
            oldArr.push(reply)
            this.setState({
                createReply: { ...this.state.createReply, replyBody: ''},
                allReplies: oldArr
            })
        })
    }

    showTheReplies(e){
        e.preventDefault();
        if (this.state.showReplies === false) {
            this.props.fetchCommentreplies(this.props.commentId).then((replies) => {
                debugger
                this.setState({
                    allReplies: replies.replies.data,
                    showReplies: true,
                    buttonLabel: 'Hide all Replies'
                })
            })
        }
        else {
            this.setState({
                showReplies: false,
                buttonLabel: "Show All Replies"
                
            })
        }
     }

     anonUsers() {
         let word = "Anonymous"
         let result = Math.floor(Math.random() * 10000) + 1;
         return word + result.toString()
     }


    render() {
      
        
        return(
            <div>
                {this.state.showReplies ? 
                    <div>
                        {this.state.allReplies.map((reply, idx) => (
                            <li key={idx}>
                                {reply.replyBody}
                            </li>
                        ))}
                        <form onSubmit={this.handleSubmit}>
                            <input type="text"
                                value={this.state.createReply.replyBody}
                                onChange={this.update('replyBody')}
                                placeholder="Insert reply here :)"
                            />
                            <button>Reply</button>
                        </form> 
                    </div>
                    : null
                }
                <button onClick={this.showTheReplies}>{this.state.buttonLabel}</button>
            </div>

        
        )
    }
}

export default ReplyBox;

 // <div>       
        //     {this.state.allReplies.map((reply, idx) => (
        //         <li key={idx}>
        //             {reply.replyBody}
        //         </li>
        //     ))}
        // </div>


