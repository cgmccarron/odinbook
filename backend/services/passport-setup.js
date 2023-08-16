import passport from "passport";
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy({
    //options for stat
  }),
  () => {
    //passport callback function
  }
);
