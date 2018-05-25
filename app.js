
//import all packages
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const productsRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

mongoose.connect('mongodb+srv://yangjian1:'+process.env.REST_API_PASSWORD+'@rest-api-node-lxt5i.mongodb.net/test?retryWrites=true');

app.use(morgan('dev')); //will call next the execute following

app.use(bodyParser.urlencoded({extended: false})); //only support simple 
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*'); //* anything
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); 
    if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
		return res.status(200). json({});
	}
	next();
	
	});

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