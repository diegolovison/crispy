/**
*	Web Module
*	Express Server
*/
var express = require('express'),
	http = require('http');
var app = express();

app.configure(function() {
	app.set('port', process.env.PORT || 3000);
	app.use(express.logger('dev')); 						// log every request to the console
	app.use(app.router);									// routes
	app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users
});

app.configure('development', function(){
	app.use(express.errorHandler());
});

app.get('/projects', function handle (req, res) {
	res.send([{name:'Crispy'},{name:'Glow'}]);
});

app.get('/projects/:id', function handle (req, res) {
	res.send({id:req.params.id, name:'Crispy'});
})

http.createServer(app).listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});