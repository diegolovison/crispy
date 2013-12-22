/**
*	Test spects for Server
*/

var should = require('should');
var assert = require('assert');
var request = require('supertest');

describe('Server', function () {
	var url = 'http://localhost:3000'

	describe('GET /projects', function () {
		it('respond with json', function (done) {
			request(url)
				.get('/projects')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200, done);
		})
		it('has list of projects', function (done) {
			request(url)
				.get('/projects')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function handle_res (err, res) {
					if (err) throw err;
					res.body.should.have.lengthOf(2);
					res.body[0].should.have.keys('name');
					res.body[0].should.have.property('name', 'Crispy');
					done();
				})
		})
	})
	describe('GET /projects/:id', function () {
		it('respond with json', function (done) {
			request(url)
				.get('/projects/1')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200, done);
		})
		it('has one project', function (done) {
			request(url)
				.get('/projects/1')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function handle_res (err, res) {
					if (err) throw err;
					res.body.should.have.property('id', '1');
					res.body.name.should.equal('Crispy');
					done();
				})
		})
	})
})