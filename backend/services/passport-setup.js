import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";

import "dotenv/config";

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "auth/google/redirect",
      clientID: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
    },
    () => {
      //passport callback function
    }
  )
);

let foo = "f00";

export default foo;
