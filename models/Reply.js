const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReplySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
       
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        
    },
    replyBody: {
        type: String,
        required: true
    }
}, {
  timestamps: true
});

module.exports = Reply = mongoose.model('Reply', ReplySchema);