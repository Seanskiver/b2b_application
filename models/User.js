'use strict';

var dynamo = require('dynamodb'),
    Joi    = require('joi'),
    AWS    = dynamo.AWS;

// AWS.config.loadFromPath(process.env.HOME + '/.aws/credentials.json');

AWS.config.update({
  accessKeyId: 'AKIAJC6LPGATSOJTV45Q',
  secretAccessKey: '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',
  region: "us-east-1"
})

module.exports.userSchema = Joi.object().keys({
    userID: dynamo.types.uuid(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(255).required(),
    firstName: Joi.string().optional(),
    lastName: Joi.string().optional(),
    phone: Joi.string().optional()  
});

module.exports.User = dynamo.define('users', {
  hashKey : 'userID',
  tableName: 'users',
  timestamps: true,
  schema : module.exports.userSchema
});


