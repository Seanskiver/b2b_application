'use strict';

var dynamo = require('dynamodb'),
    Joi    = require('joi'),
    AWS    = dynamo.AWS;

// AWS.config.loadFromPath(process.env.HOME + '/.aws/credentials.json');


AWS.config.update({
  accessKeyId: 'AKIAIJXJW267L4IRFU6Q',
  secretAccessKey: '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',
  region: "us-east-1"
});

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
  module.exports.dbUser.create({
    email: user.email,
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
}