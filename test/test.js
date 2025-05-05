const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('API Tests', function() {
    it('GET /api/status should return operational status', function(done) {
        request(app)
            .get('/api/status')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                expect(res.body).to.have.property('status', 'operational');
                expect(res.body).to.have.property('version', '1.1.0');
                done();
            });
    });

    it('GET / should serve the index page', function(done) {
        request(app)
            .get('/')
            .expect(200)
            .expect('Content-Type', /html/)
            .end(function(err, res) {
                if (err) return done(err);
                expect(res.text).to.include('DevOps Exercise Application');
                done();
            });
    });
});