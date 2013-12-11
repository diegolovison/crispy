/**
*	Test spec for Project
*/

var assert = require('assert')
	, crispy = require('../lib/crispy.js');

describe('Project', function() {
	var cp;

	beforeEach(function() {
		cp = new crispy.Project();
	})

	describe('New Project', function() {
		it('should have a name', function() {
			assert.equal('New Project', cp.name);
		})
		it('should have estimated time', function() {
			cp.estimated = 200;
			assert.equal(200, cp.estimated);
		})
		it('should calculate remaining time', function() {
			cp.estimated = 200;
			cp.actual = 100;
			assert.equal(100, cp.remaining());
		})
	})
})