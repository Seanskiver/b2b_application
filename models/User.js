'use strict';

var dynamo = require('dynamodb'),
    Joi    = require('joi'),
    AWS    = dynamo.AWS;

AWS.config.loadFromPath(process.env.HOME + '/.aws/credentials.json');
dynamo.AWS.config.update({region: "us-east-1"});

var User = dynamo.define('users', {
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


module.exports = User

