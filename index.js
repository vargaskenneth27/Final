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

const mysql = require('mysql');
const connection = mysql.createConnection({
	host: '192.185.2.183',
	database: 'kennethv_logininfo',
	user: 'kennethv_kvwavey',
	password: 'Firekicks1!',
	port: '3306',
	JWT_SECERT: 'abc123',
	JWT_EXPIRES_IN: '90d',
	WT_COOKIE_EXPIRES: '90'
});

app.engine('handlebars', expbs({
	defaultLayout: 'main',
	layoutsDir: path.join(__dirname, 'Views/mainLayout'
)}));
app.set('view engine', 'handlebars');

const PORT = 1337;

connection.connect(function(err) {
	if (err) {
		console.log("Connection error could not connect to Database: " + err);
	} else {
		console.log("Connection was succesful!");
	}
});

//connection.query("SELECT name FROM signup_info WHERE username=", [username], (function(err, rows, fields) {
//	if(err) {
//		console.log("Query error could not find query: " + err);
//		return;
//	}
//	if(rows.length == 0) {
//		console.log("no results!");
//		return;
//	}
//
//	console.log("ROWS: " + rows);
//}));

//connection.end(function() {
//	console.log('Connection Ended!');
//});


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

app.get('/auction', function(request, response) {
	response.render(dir + "auction");
});

app.get('/auction2', function(request, response) {
	response.render(dir + "auction2");
});

app.get('/auction3', function(request, response) {
	response.render(dir + "auction3");
});

app.get('/contactus', function(request, response) {
	response.render(dir + "contactus");
});

app.get('/explore', function(request, response) {
	response.render(dir + "explore");
});

app.get('/friends', function(request, response) {
	response.render(dir + "friends");
});

app.get('/login', function(request, response) {
	response.render(dir + "login");
});

app.get('/pas_for', function(request, response) {
	response.render(dir + "pas_for");
});

app.get('/pass_for', function(request, response) {
	response.render(dir + "pass_for");
});

app.post('/profile', function(request, response) {
	response.render(dir + "profile");
});

app.get('/signup', function(request, response) {
	response.render(dir + "signup");
});

app.get('/*', function(request, response) {
	response.render(dir + '404');
});



//listen on port
app.listen(PORT, function () {
	console.log("Listening on localhost:"+ PORT + " press ctrl+c to quit...");
});

