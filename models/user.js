var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var config = require('../Config');

var Schema = mongoose.Schema;

var conn = mongoose.createConnection(config.db_url);

var UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre('save', function(next) {
   var user = this;

   if (this.isModified('password') || this.isNew) {
       bcrypt.genSalt(10, function(err, salt) {
           if (err)
            return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err)
                return next(err);
            
            user.password = hash;

            next();
        });
       });
   }
});

UserSchema.methods.comparePassword = function(passw, callback) {
    bcrypt.compare(passw, this.password, function(err, isMatch) {
        if (err)
            return callbackify(err);

        callback(null, isMatch);
    });
};

module.exports = conn.model('User', UserSchema);