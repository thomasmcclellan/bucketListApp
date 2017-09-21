const Bucketlist = require('../models/bucketlist.js');

exports.addBucketList = function(req, res, next){
	//For Postman use
	// let title = req.body.title;

	//Form Browser use
	let title = req.body.title;

	let topic = req.body.topic;
	let url = req.body.url;
	let content = req.body.content;
	let specificUser = req.user._id;

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

exports.fetchBucketLists = function(req, res){
	let specificUser = req.user._id;
	Bucketlist.find({ specificUser: specificUser })
		.then(
			function fetchSuccess(data){
				res.json(data);
			},
			function fetchError(err){
				res.send(500, err.message);
			}
		);
}