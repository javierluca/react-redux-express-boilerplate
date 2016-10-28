import 'babel-polyfill';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from './../../dist/server';

let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

describe('Home', () => {

    it('GET /', function(done) {
        chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          done();
      });
    });

});

describe('Api', () => {

    it('GET api/test', function(done) {
        chai.request(server)
        .get('/api/test')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          expect(res.body).to.deep.equal({ key: 'value' });
          done();
      });
    });

});

