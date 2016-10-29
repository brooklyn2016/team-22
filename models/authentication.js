import User from "./user";
import jwt from "jsonwebtoken";
import moment from "moment";

var config;
try {
  config = require('../env.json');
}
catch (e) {
  if(e.code === 'MODULE_NOT_FOUND') {
    console.log("CANNOT LOAD env.json");
  }
  config = process.env;
}


function tokenForUser(user) {
  const timestamp = new Date().getTime();
  // iat = issued at time
  return jwt.sign({sub: user.id, fullname: user.fullname ,username: user.username ,iat: timestamp}, config.SECRET_KEY, {expiresIn: '7d'});
  // return jwt.encode({sub: user.id, iat: timestamp}, config.SECRET_KEY);
}

export const signUp = function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  const fullname = req.body.fullname;

  if(!username || !password) {
    return res.status(422).send({error: 'You must provide email and password'});
  }

  User.findOne({username: username}, function(error, existingUser) {
    if (error) {
      return next(error);
    }

    if (existingUser) {
      return res.status(422).send({error: 'Username is in use'});
    }

    const user = new User({
      fullname: fullname,
      username: username,
      password: password,
      created: moment().unix()
    });

    user.save(function(error) {
      if (error) {
        return next(error);
      }
      res.json({token: tokenForUser(user, false)});
    });

  });
};

exports.signIn = function(req, res, next) {
  // Give token
  // req.user is from passport done(user)
  console.log(req.user);
  res.send({token: tokenForUser(req.user)});
};
