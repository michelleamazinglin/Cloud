const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Comment = require('../../models/Comment');
const validateCommentInput = require('../../validation/comments');

router.get('/:user_id', (req, res) => {
    Comment.find({user: req.params.user_id})
        .then(comments => res.json(comments))
        .catch((err) =>
            res
                .status(404)
                .json({ nocommentsfound: "No comments found from that user" })
        );
})

router.get('/post/:post_id', (req, res) => {
    Comment.find({post: req.params.post_id})
      .then((comments) => res.json(comments))
      .catch((err) =>
        res
          .status(404)
          .json({ nocommentsfound: "No comments found from that post" })
      );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateCommentInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        
        const newComment = new Comment({
            commentBody: req.body.commentBody,
            post: req.body.post,
            user: req.body.user
        });

        newComment.save().then(comment => res.json(comment));
    }
);


module.exports = router;

