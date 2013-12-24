/**
*	Web Module
*	Express Server
*/
var express = require('express');
var app = express();

app.configure(function() {
	app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users
	//app.use(express.logger('dev')); 						// log every request to the console
	//app.use(express.bodyParser()); 							// pull information from html in POST
	//app.use(express.methodOverride()); 						// simulate DELETE and PUT
});

app.get('/projects', function handle (req, res) {
	res.send([{name:'Crispy'},{name:'Glow'}]);
});

app.get('/projects/:id', function handle (req, res) {
	res.send({id:req.params.id, name:'Crispy'});
})

app.listen(3000);
console.log('Listening on port 3000...');