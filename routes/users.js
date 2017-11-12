var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');
var Joi = require('joi');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/*router.get('/signup', function(req, res, next) {
  res.render('signup', {title: 'signup'});
  
});*/


router.get('/signup', function(req, res, next) {
  res.render('signup2', {title: 'signup'});
});


// Check that user doesn't already exists
router.post('/signup', function(req, res, next) {
  res.end("OK");
  User.scan()
  .where('email').equals(req.body.email)
  .exec(function(err, user) {
    console.log(user);
    if (user.Count > 0) {
      res.end('user account already exists');
    } else {
      next();
    }
  });
})


router.post('/signup', function(req, res, next) {
  res.end("OK");
  // Password match
  if ( req.body.password !== req.body.password_confirm ) {
    res.end('passwords must match.');
  }
  
  Joi.validate({
    password: req.body.password,
    pasword_confirm: req.body.password_confirm,
    firstName: req.body.firsName,
    lastName: req.body.lastName
  }, 
  User.userSchema,
  function(err, value) {
    if (err) {
      res.end(err);
    } else {
      res.end(value);
    }
  });
    
  User.create({
    email: req.email,
    // Todo: bcrypt the password
    password: req.body.password,
    pasword_confirm: req.body.password_confirm,
    firstName: req.body.firsName,
    lastName: req.body.lastName
  }, function(err, user) {
    if (err) {
      console.log('ERROR: ');
      console.log(err);
      res.end("ERROR");
    } else {
      // console.log('new user created');
      // console.log(user.get('email'));
      res.end("success!");
    } 
  });
})

module.exports = router;
