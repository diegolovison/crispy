/**
*	Crispy Module
*	Effort prototype
*/

var crispy = exports = module.exports = {};

crispy.Effort = function(size) {
	this.size = size;
	this.spent = 0;
}

crispy.Effort.prototype.left = function() {
	return this.size - this.spent;
};