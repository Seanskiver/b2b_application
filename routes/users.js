var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');
var dbUser = User.dbUser;
var userSchema = User.userSchema;
var Joi = require('Joi');
var bcrypt = require('bcrypt');


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


/*router.get('/signup', function(req, res, next) {
   res.render('signup', {title: 'signup'});
});*/

// Validate form inputs
router.post('/signup', function(req, res, next) {
  // check passwords match 
  if (req.body.password !== req.body.password_confirm) {
    return res.json({err: true, message:"Passwords do not match"});
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
      errorObject = {
        err: true,
        message: err.details
      }
      return res.json(errorObject);
    } else {
      // console.log(value);
      req.user = value;
      next('route');
    }
  });  
})


// Check that user doesn't already exist
router.post('/signup', function(req, res, next) {
  User.userExists(req.body.email, function(err, exists) {
    if (err) {
      console.log(err);
      res.end('error finding user');
    } 
    
    if (exists == true) {
      return res.json({err: true, message: 'A user with that email alredy exists'});
    } else {
      next('route');
    }
  })
});



router.post('/signup', function(req, res, next) {
  var user = req.user;
  // Create user hash
  User.create(user, function(err, result) {
    if (err) {
      console.log(err);
      return res.json({err: true, message: 'error creating user'});
      return;
    }
    console.log(result);
    res.json({err: false, message: 'success!'});
  })
});

module.exports = router;
