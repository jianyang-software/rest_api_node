const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
	res.status(200).json({
		message: 'Orders were fetched'
	});
});

router.post('/', function(req, res, next){
	res.status(201).json({
		message: 'Order was created'
	});
});
//Routes handling incoming orders 
router.get('/:orderId', function(req,res, next) {
	res.status(200).json({
		message: 'Order details',
		orderId: req.params.orderId
	});
});

router.get('/:orderId', function(req,res, next) {
	res.status(200).json({
		message: 'Order deleted',
		orderId: req.params.orderId
	});
});

module.exports= router;