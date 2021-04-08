var express = require("express");
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();
app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

const PORT = process.env.PORT || 3000

app.get('/', function(req,resp) {
	res.sendFile(__dirname + '/form.html');
});

app.get('/removeCookie', function(req,resp) {
	resp.cookie('myFirstCookie');
	resp.end('Wow');
});

app.get('/yur', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});

app.listen(PORT, function () {
	console.log("Listening on http://localhost:"+ PORT + " press ctrl+c to quit...");
});