/**
*	Crispy Module
*	Project prototype
*/

var effort = require('./effort');

var crispy = exports = module.exports = {};

crispy.Project = function() {
	this.name = 'New Project';
	this.effort = new effort.Effort(60);
};

crispy.Project.prototype.remaining  = function() {
	return this.effort.left();
};

crispy.Project.prototype.log = function(time) {
	this.effort.spent += time;
};

crispy.Project.prototype.start = function() {
	this.intId = setInterval(this.log(1), 1000);
};

crispy.Project.prototype.stop = function() {
	clearInterval(this.intId);
};