const Auth = require('./controllers/auth.js'); 
const BucketList = require('./controllers/bucketlistcontroller.js');

const passportService = require('./services/passport.js');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app){
	app.post('/signup', Auth.signup);
	app.post('/signin', requireSignin, Auth.signin);
	app.post('/newitem', requireAuth, BucketList.addBucketList);
	app.get('/items', requireAuth, BucketList.fetchBucketLists);
	app.get('/items/:id', requireAuth, BucketList.fetchBucketList);
	app.delete('/items/:id', requireAuth, BucketList.deleteBucketList);
}