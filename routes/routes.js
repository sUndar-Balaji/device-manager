var express = require ("express");
var mongoose = require ("mongoose");
var router = express.Router();
var multer = require ("multer");
var upload = multer ();


//DB Connection
mongoose.connect ("mongodb://shielded-brook-22535.herokuapp.com/devices", function (err) {

	if (err) {
		console.log ("error", err);
	}

}); 


//Device Schema
var deviceSchema = mongoose.Schema ({

	name: String,
	model: String

});


//Device Modal
var Device = mongoose.model ('Device', deviceSchema);


//Routes
router.get ("", function (req, res) {

	Device.find({}, function (err, devices) {

		res.json (devices);

	});

});

router.post ("/new", upload.array(), function (req, res) {

	var device = new Device ({name: req.body.name, model: req.body.modal});

	device.save (function (err) {

		if (err)
			next (new Error(err));

		res.sendStatus (200);

	});

});

router.get ("/:id", function (req, res, next) {

	Device.findOne ({_id: req.params.id}, function (err, device) {

		if (err)
			next (new Error(err));

		res.json (device);

	});

});

router.post ("/update", upload.array(), function (req, res) {

	Device.findOneAndUpdate ({id: req.params.id}, { name: req.body.deviceName, model: req.body.deviceModal }, function (err, device) {

		if (err)
			next (new Error(err));

		res.sendStatus (200);

	});

});

router.get ("/remove/:id", function (req, res) {

	console.log (req.params.id);

	Device.remove ({_id: req.params.id}, function (err, data) {

		if (err) 
			next (new Error(err));

		res.sendStatus (200);

	});

});


module.exports = router;