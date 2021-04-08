const express = require('express');
const app = express.Router();


const bodyParser = require('body-parser');
// app is an express application-- this is how we'll access all of the functionality of the module 
app.use(bodyParser.urlencoded({ extended: true }));
const expbs = require('express-handlebars');
const path = require('path');

app.use(express.static('Views'));

const dir = __dirname + '/Views/';

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

app.get('/signup', function(request, response) {
	response.render(dir + "signup");
});

app.get('/*', function(request, response) {
	response.render(dir + '404');
});

module.exports = router;