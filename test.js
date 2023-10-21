const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app');
const expect = chai.expect;
chai.use(chaiHttp);
describe('API de Lista de Tarefas', () => {
    it('Deve obter uma lista de tarefas vazia', (done) => {
      chai.request(app)
        .get('/tasks')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          expect(res.body).to.be.empty;
          done();
        });
    });
  
    it('Deve adicionar uma tarefa', (done) => {
      chai.request(app)
        .post('/tasks')
        .send({ task: 'Comprar leite' })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('task').to.equal('Comprar leite');
          done();
        });
    });
  });