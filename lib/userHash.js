var bcrypt = require('bcrypt');

const saltRounds = 10;

module.exports.hashUser = function(password, callback) {
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            return callback(err, hash)
        });
    });
}
