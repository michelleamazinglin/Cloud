const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const passport = require("passport");
const User = mongoose.model('User');
const keys = require('./keys')
//computer died lol ill be back in a sec
//okkkkkiee ;D
const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            // return the user to the frontend
            return done(null, user);
          }
          // return false since there is no user
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );
};