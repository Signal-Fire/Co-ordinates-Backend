// load up the user model
var User = require('../models/user');
var config = require('../Config'); // get db config file

var JwtStrategy = new(require('passport-jwt').Strategy)({
    secretOrKey: config.passport_secret
}, function (jwt_payload, done) {
    User.findOne({
        id: jwt_payload.id
    }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

module.exports = function (passport) {
    passport.use('jwt', JwtStrategy);
};