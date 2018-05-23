const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {  //subroutes
	res.status(200).json({
		message: 'Handling GET requests to /products'
	});
});

router.post('/', function(req, res, next) {
	res.status(200).json({
		message: 'Handling POST request to /products'
	});
});

router.get('/:productId', function(req, res, next) {
	const id = req.params.productId;
	if(id === 'special') {
		res.status(200).json({
			message: 'You discovered the special ID',
			id: id
		})
	}else {
		res.status(200).json({
			message: 'You passed an ID'+id 
		});
	}
});

router.patch('/:productId', function(req, res, next) {
	
		res.status(200).json({
			message: 'Updated product!'
		});	
});

router.delete('/:productId', function(req, res, next) {
	
		res.status(200).json({
			message: 'Deleted product!'
		});	
});

module.exports = router;