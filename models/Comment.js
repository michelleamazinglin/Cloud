const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    commentBody: {
        type: String,
        required: true
    }
}, {
  timestamps: true
});

module.exports = Comment = mongoose.model('Comment', CommentSchema);