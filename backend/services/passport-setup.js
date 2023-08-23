import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import User from "../models/userModel.js";
import "dotenv/config";

//serialize a user based on the mongoDB id
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//de-serialize a user based on mongoDB id
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

const setupAuth = passport.use(
  new GoogleStrategy(
    {
      //Google Staregy options
      callbackURL: "http://localhost:9000/auth/google/redirect",
      clientID: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
    },
    (accessToken, refreshToken, profile, done) => {
      //check if user already exists in DB
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          console.log("user is: " + currentUser);
          // already have user
          done(null, currentUser);
        } else {
          //if no user create user
          new User({
            username: profile.displayName,
            googleId: profile.id,
            avatar: profile._json.picture,
          })
            .save()
            .then((newUser) => {
              console.log("new user created " + newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);

export default setupAuth;
