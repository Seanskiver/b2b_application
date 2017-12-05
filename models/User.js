'use strict';

var dynamo = require('dynamodb'),
    Joi    = require('joi'),
    AWS    = dynamo.AWS,
    hashing = require('../lib/userHash')
;
// AWS.config.loadFromPath(process.env.HOME + '/.aws/credentials.json');


module.exports.userSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(255).required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  phone: Joi.string().optional()  
});


module.exports.dbUser = dynamo.define('users', {
  hashKey : 'userID',
  tableName: 'users',
  timestamps: true,
  schema : {
    userID: dynamo.types.uuid(),
    email: Joi.string().email(),
    password: Joi.string(),
    firstName: Joi.string().optional(),
    lastName: Joi.string().optional(),
    phone: Joi.string().optional()
  }
});

module.exports.create = function(user, callback) {
  hashing.hashUser(user.password, function(err, hash) {
    if (err) {
      return callback(err, null)
    }
    // Set user password = hash
    user.password = hash;
    // Create user
    module.exports.dbUser.create({
      email: user.email.toLowerCase(),
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName
    }, function(err, user) {
      if (err) {
        return callback(err, null);
      } else {
        return callback(null, user)
      } 
    });  
  })
}

module.exports.userExists = function(email, callback) {
  module.exports.dbUser.scan()
  .where('email').equals(email.toLowerCase())
  .exec(function(err, user) {
    if (err) {
      return callback(err, null);
    }

    if (user.Count > 0) {
      return callback(null, true);
    } else {
      return callback(null, false);
    }
  });
}