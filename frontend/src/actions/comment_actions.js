import {getPostComments, getUserComments, writeComment} from '../util/comment_api_util';

export const RECEIVE_POST_COMMENTS = "RECIEVE_POST_COMMENTS";
export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";
export const RECEIVE_USER_COMMENTS = "RECEIVE_USER_COMMENTS"

export const receiveUserComments = comments => ({
    type: RECEIVE_USER_COMMENTS,
    comments
})

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
        .then(comment => dispatch(receiveNewComment(comment)))
        .catch(err => console.log(err))
};

export const fetchUserComments = id => dispatch => {
    return getUserComments(id)
        .then(comments => dispatch(receiveUserComments(comments)))
        .catch(err => console.log(err))
}


