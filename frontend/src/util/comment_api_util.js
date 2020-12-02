import axios from 'axios';

export const getPostComments = id => {
    return axios.get(`/api/comments/post/${id}`)
};

export const writeComment = data => {
    return axios.post('/api/posts/', data)
}

