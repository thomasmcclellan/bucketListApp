const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};

//Create jwt strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
	//On payload we have sub property. Use the User model, look through all users and find user with id
	User.findById(payload.sub, function(err, user){
		//In the fineById callback, we will get two arguments, err and user.
		//Err is going to be populated only if search fails
		if (err){
			return done(err, false);
		}
		//If we can find the user, pass it to done callback. They are authenticated.
		if (user){
			done(null, user);
		}
		else {
			//If we can not find user with id, we are going to call done func without user object
			done(null, false);
		}
	});
});

passport.use(jwtLogin);