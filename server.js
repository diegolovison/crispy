/**
*	Web Module
*	Express Server
*/
var express = require('express');
var app = express();

app.get('/projects', function handle (req, res) {
	res.send([{name:'Crispy'},{name:'Glow'}]);
});

app.get('/projects/:id', function handle (req, res) {
	res.send({id:req.params.id, name:'Crispy'});
})

app.listen(3000);
console.log('Listening on port 3000...');