import {getPostComments, writeComment} from '../util/comment_api_util';

export const RECEIVE_POST_COMMENTS = "RECIEVE_POST_COMMENTS";
export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";

export const receivePostComments = comments => ({
    type: RECEIVE_POST_COMMENTS,
    comments
});

export const receiveNewComment = comment => ({
    type: RECEIVE_NEW_COMMENT,
    comment
});

export const fetchPostComments = id => dispatch => {
    return getPostComments(id)
        .then(comments => dispatch(receivePostComments(comments)))
        .catch(err => console.log(err))
};

export const createComment = data => dispatch => {
    return writeComment(data)
        .then(comment => dispatch(createComment(comment)))
        .catch(err => console.log(err))
};


