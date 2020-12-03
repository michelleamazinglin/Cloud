import {writeReply, getCommentReplies} from '../util/reply_api_util';

export const RECEIVE_COMMENT_REPLIES = "RECIEVE_COMMENT_REPLIES";
export const RECEIVE_NEW_REPLY = "RECEIVE_NEW_REPLY";

export const receiveCommentReplies = replies => ({
    type: RECEIVE_COMMENT_REPLIES,
    replies
});

export const receiveNewReply = reply => ({
    type: RECEIVE_NEW_REPLY,
    reply
});

export const fetchCommentreplies = id => dispatch => {
    return getCommentReplies(id)
        .then(replies => dispatch(receiveCommentReplies(replies)))
        .catch(err => console.log(err))
};

export const createReply = data => dispatch => {
    return writeReply(data)
        .then(reply => dispatch(receiveNewReply(reply)))
        .catch(err => console.log(err))
};
