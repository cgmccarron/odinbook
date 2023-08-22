import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";

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
    }
  )
);

export default setupAuth;
