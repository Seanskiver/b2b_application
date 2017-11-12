var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');
var dbUser = User.dbUser;
var userSchema = User.userSchema;
var Joi = require('Joi');
var bcrypt = require('bcrypt');
var hashing = require('../lib/userHash');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/*router.get('/signup', function(req, res, next) {
  res.render('signup', {title: 'signup'});
  
});*/

// Check if all required fields are entered
router.get('/signup', function(req, res, next) {
  res.render('signup2', {title: 'signup'});
});


// Check that user doesn't already exist
// router.post('/signup', function(req, res, next) {
//   dbUser.scan()
//   .where('email').equals(req.body.email)
//   .exec(function(err, user) {
//     console.log(err);
//     if (typeof user == 'undefined') {
//       next();
//     }
//     console.log(user);
//     if (user.Count > 0) {
//       res.end('user account already exists');
//     } else {
//       next();
//     }
//   });
// });


// Validate form inputs
router.post('/signup', function(req, res, next) {
  // check passwords match 
  if (req.body.password !== req.body.password_confirm) {
    res.end("passwords do not match");
  }

  var input = {
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  };

  Joi.validate(input, userSchema, function(err, value) {
    if (err) {
      // console.log(err.details[0].message);
      res.end(err.details[0].message);
    } else {
      // console.log(value);
      req.user = value;
      next();
    }
  });  
})




router.post('/signup', function(req, res, next) {
  var user = req.user;
  // Create user hash
  hashing.hashUser(user.password, function(err, hash) {
    if (err) {
      console.log(err);
      res.end('error creating user. Please try again later');
    } else {
      // Assign hashed password to user object
      user.password = hash;
      // Create user in DB
      User.create(user, function(err, result) {
        if (err) {
          console.log(err)
        } else {
          console.log(result);
          res.end('hashed user created');
        }
      });
    }
  })
});

module.exports = router;
