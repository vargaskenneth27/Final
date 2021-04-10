// 192.185.2.183
// allows us to use express module
const express = require("express");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// app is an express application-- this is how we'll access all of the functionality of the module 
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const expbs = require('express-handlebars');
const path = require('path');

app.engine('handlebars', expbs({
	defaultLayout: 'main',
	layoutsDir: path.join(__dirname, 'Views/mainLayout'
)}));
app.set('view engine', 'handlebars');

const PORT = 1337;

// look for static files to be served inside Views folder
app.use(express.static('Views'));
app.use('/auth', require('./routes/auth'));

const dir = __dirname + '/Views/';

//get the route to the hompage and respond w/ hello world
app.get('/', function(request, response) {
	response.render(dir + "Home");
});

app.get('/Home', function(request, response) {
	response.render(dir + "Home");
});

app.get('/ironman', function(request, response) {
	response.render(dir + "ironman");
});

app.get('/thor', function(request, response) {
	response.render(dir + "thor");
});

app.get('/captainamerica', function(request, response) {
	response.render(dir + "captainamerica");
});

app.get('/hulk', function(request, response) {
	response.render(dir + "hulk");
});

app.get('/blackwidow', function(request, response) {
	response.render(dir + "blackwidow");
});

app.get('/hawkeye', function(request, response) {
	response.render(dir + "hawkeye");
});

app.get('/*', function(request, response) {
	response.render(dir + '404');
});



//listen on port
app.listen(PORT, function () {
	console.log("Listening on localhost:"+ PORT + " press ctrl+c to quit...");
});

