const passport= require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const TwitterStrategy = require("passport-twitter").Strategy;

const users = require('../models').users;

const GoogleCreds = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CB_URL
}

passport.use(new GoogleStrategy(GoogleCreds,
  (accessToken, refreshToken, profile, cb) => {
    const searchConditions={
        $or: [
          { email: profile.emails[0].value},
          { google_id: profile.id.toString()}
        ]
    };

    const newUser = {
      email: profile.emails[0].value,
      google_id: profile.id.toString(),
      username: profile.displayName
    }

    users
      .findOrCreate({where: searchConditions, defaults: newUser})
      .spread((user,created)=>cb(null,user))

    return cb(null,profile)
}))

// passport.use(new TwitterStrategy(TwitterCreds,
//   (token, tokenSecret, profile, done) => {
//     const searchConditions={
//       $or: [
//         { email: profile.emails[0].value},
//         { twitter_id: profile.id.toString()}
//       ]
//   };

//   const newUser = {
//     email: profile.emails[0].value,
//     twitter_id: profile.id.toString(),
//     username: profile.displayName
//   }

//   users
//     .findOrCreate({where: searchConditions, defaults: newUser})
//     .spread((user,created)=>done(null,user))
// }))

passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((obj, cb) => cb(null, obj));

module.exports = passport;