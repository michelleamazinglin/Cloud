const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Reply = require('../../models/Reply');
const validateReplyInput = require('../../validation/reply');

router.get('/comment/:comment_id', (req, res) => {
    Reply.find({comment: req.params.comment_id})
      .then((replies) => res.json(replies))
      .catch((err) =>
        res
          .status(404)
          .json({ nocommentsfound: "No replies found from that comment" })
      );
})

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateReplyInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        
        const newReply = new Reply({
            replyBody: req.body.replyBody,
            comment: req.body.comment,
            user: req.body.user
        });

        newReply.save().then(reply => res.json(reply));
    }
);

module.exports = router;