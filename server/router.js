const Auth = require('./controllers/auth.js'); 
const passportService = require('./services/passport.js');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app){
	app.get('/', requireAuth, function(req, res){
		res.send({ message: 'hi there' });
	});

	app.post('/signup', Auth.signup);
	app.post('/signin', requireSignin, Auth.signin);
}