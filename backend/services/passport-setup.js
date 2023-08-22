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
      //passport callback function
      console.log("function fired");
      console.log(profile);
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
  )
);

export default setupAuth;
