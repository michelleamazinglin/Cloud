import axios from 'axios';

export const getCommentReplies = id => {
    return axios.get(`/api/replies/comment/${id}`)
};

export const writeReply = data => {
    return axios.post('/api/replies/', data)
}