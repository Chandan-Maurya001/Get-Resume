const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models");
const {compare} = require("../utils")

module.exports = function () {
  return (passport) => {
    passport.use(
      new LocalStrategy(async (username, password, done) => {
        // our local stretegy
        console.log(username, password);
        try {
          const user = await User.findOne({ where: { email: username } });

          if (!user) return done(null, false, { message: "Invalid username or password" });
          const passwordMatch = await compare(password, user.password);

          if (!passwordMatch)
            return done(null, false, {
              message: "Invalid username or password",
            });
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      })
    );
    passport.serializeUser((user, done) => {
      if (user) return done(null, user.id);
      return done(null, false);
    });
    passport.deserializeUser((id, done) => {
      User.findOne({ where: { id: id } }).then((user) => {
        if (user) return done(null, user);
        return done(null, false);
      }).catch((error) => {
        return done(error, false);
      })
    });
  };
};
