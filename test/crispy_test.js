/**
*	Test spec for Project
*/

var assert = require('assert')
	, crispy = require('../lib/crispy.js');

describe('Project', function() {
	var cp = new crispy.Project();

	beforeEach(function() {
		cp = new crispy.Project();
	})

	describe('Default New Project', function() {
		it('should have a name', function() {
			assert.equal('New Project', cp.name);
		})
		it('should have 60 minutes of effort', function() {
			assert.equal(60, cp.remaining());
		})
		it('should update effort after time is logged', function() {
			cp.log(10);
			assert.equal(50, cp.remaining());
		})
		it('should update effort after successive time is logged', function() {
			cp.log(10);
			cp.log(10);
			assert.equal(40, cp.remaining());
		})
		it('should update effort after time is elapsed', function(done) {
			cp.start();
			setTimeout(cp.stop(), 1000);
			done();
			assert.equal(59, cp.remaining());
		})
	})
})