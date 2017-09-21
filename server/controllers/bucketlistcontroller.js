const Bucketlist = require('../models/bucketlist.js');

exports.addBucketList = function(req, res, next){
	//For Postman use
	// let title = req.body.title;

	//Form Browser use
	let title = req.body.props.title;

	let topic = req.body.props.topic;
	let url = req.body.props.url;
	let content = req.body.props.content;
	let specificUser = req.user;

	let bucketList = new BucketList({
		title: title,
		topic: topic,
		url: url,
		content: content,
		specificUser: specificUser
	});

	bucketList.save(function(err){
		if (err){
			return next(err);
		}
		res.json(bucketList);
	})
}