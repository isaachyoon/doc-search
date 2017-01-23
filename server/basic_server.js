var express = require('express')
// import React from ('react');
var app = express();



app.get('/', function(req, res){
	console.log('hello');
})

var PORT = 8000;
app.listen(PORT, function() {
	console.log('connection live!')
})

