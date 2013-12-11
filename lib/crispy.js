/**
*	Crispy Module
*	Project prototype
*/

var crispy = exports = module.exports = {};

crispy.Project = function() {
	this.name = 'New Project';
	this.estimated = 0;
	this.actual = 0;
};

crispy.Project.prototype.remaining = function() {
	return this.estimated - this.actual;
};
