'use strict';

var dynamo = require('dynamodb'),
    Joi    = require('joi'),
    AWS    = dynamo.AWS;

AWS.config.loadFromPath(process.env.HOME + '/.aws/credentials.json');
dynamo.AWS.config.update({region: "us-east-1"});

var Business = dynamo.define('businesses', {
  hashKey : 'businessID',
  tableName: 'businesses',
  timestamps: true,
  schema : {
    businessID: dynamo.types.uuid(),
    ownerUserID: dynamo.types.uuid(),
    name: Joi.string(),
    address: Joi.string(),
    phone: Joi.string().optional(),
    email: Joi.string().email().optional()
  }
});

module.exports = Business;