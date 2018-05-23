const express = require('express');
const app = express();
const morgan = require('morgan');


const productsRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev')); //will call next the execute following

app.use('/products', productsRoutes); // filter, call back
app.use('/orders', orderRoutes);

app.use(function(req, res, next){
	const error = new Error('Not founded');
	res.status(404);
	next(error);
	});


app.use(function(error, req, res, next) {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
});

module.exports = app;