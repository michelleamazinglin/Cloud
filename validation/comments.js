const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCommentInput(data) {
    let errors = {};
    data.commentBody = validText(data.commentBody) ? data.commentBody : '';

    if (!Validator.isLength(data.commentBody, { min: 5, max: 140 })) {
        errors.commentBody = 'Comment must be between 5 and 140 characters';
    }

    if (Validator.isEmpty(data.commentBody)) {
        errors.commentBody = 'Comment field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}