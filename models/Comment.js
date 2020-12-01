const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'posts'
    },
    commentBody: {
        type: String,
        required: true
    }
}, {
  timestamps: true
});

module.exports = Comment = mongoose.model('Comment', CommentSchema);