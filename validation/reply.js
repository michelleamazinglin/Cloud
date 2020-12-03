const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateReplyInput(data) {
    let errors = {};
    data.replyBody = validText(data.replyBody) ? data.replyBody : '';

    if (!Validator.isLength(data.replyBody, { min: 2, max: 500 })) {
        errors.replyBody = 'Reply must be between 2 and 500 characters';
    }

    if (Validator.isEmpty(data.replyBody)) {
        errors.replyBody = 'Reply field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}