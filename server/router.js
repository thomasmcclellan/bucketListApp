const Auth = require('./controllers/auth'); //Include the authorization controller
const User = require('./models/user'); //Include the User model

module.exports = function(app){
	app.get('/', function(req, res, next){
		res.send("HELLO HOMEPAGE");
	});

	app.get('/signup', function(req, res, next){
		res.send("Hey folks, thanks for signing up!");
	});

	app.post('/signup', Auth.signup);
}