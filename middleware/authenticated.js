const { ErorrHandler } = require("../helper");


module.exports = {
  isAuthenticated: (types) => {
    return (req, res, next) => {
      const user = req.user;
      // console.log(req.originalUrl);
      if (req.isAuthenticated()) {
        if (types && types.includes(user.role)) {
          return res.redirect("/");
        }
        return next();
      } else {
        return res.redirect("/user/login");
      }
    };
  },
  isUnauthenticated: () => {
    return (req, res, next) => {
      if (!req.isAuthenticated()) {
        return next();
      } else {
        return res.redirect("/");
      }
    };
  },
};