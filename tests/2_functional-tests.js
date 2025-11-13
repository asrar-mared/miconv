const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

  test('Convert valid input', function(done) {
    chai.request(server)
      .get('/api/convert')
      .query({input: '10L'})
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.initNum, 10);
        assert.equal(res.body.initUnit, 'l');
        assert.equal(res.body.returnUnit, 'gal');
        done();
      });
  });

  test('Invalid unit', function(done) {
    chai.request(server)
      .get('/api/convert')
      .query({input: '32g'})
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'invalid input');
        done();
      });
  });

  test('Invalid number', function(done) {
    chai.request(server)
      .get('/api/convert')
      .query({input: '3/7.2/4kg'})
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'invalid input');
        done();
      });
  });

});
