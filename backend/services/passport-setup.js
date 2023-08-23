import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import User from "../models/userModel.js";
import "dotenv/config";

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
            });
        }
      });
    }
  )
);

export default setupAuth;
