const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Comment = require('../../models/Comment');
const validateCommentInput = require('../../validation/comments');

router.get('/post/:post_id', (req, res) => {
    Post.find({user: req.params.user_id})
        .then(posts => res.json(posts))
        .catch(err =>
            res.status(404).json({ nocommentsfound: 'No comments found from that user' }
        )
    );
});