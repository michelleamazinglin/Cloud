import {RECEIVE_COMMENT_REPLIES, RECEIVE_NEW_REPLY} from '../actions/reply_actions' ;

const repliesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {}
    switch (action.type) {
        case RECEIVE_COMMENT_REPLIES:
            return Object.assign({}, state, action.replies.data)
        case RECEIVE_NEW_REPLY:
            return Object.assign({}, state, {[action.reply.id]: action.reply.data})
            default:
                return state;
    }

    
}

export default repliesReducer;