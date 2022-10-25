import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /login', () => {
  describe('Quando o campo "email" não é informado', () => {
    it('deve retornar um status 400', async () => {
      const httpTResponse = await chai
        .request(app)
        .post('/login')
        .send({ password: 'any_password' });
      expect(httpTResponse.status).to.equal(400);
      expect(httpTResponse.body).to.deep.equal({ message: "All fields must be filled" });
    });
  });
  describe('Quando o campo "password" não é informado', () => {
    it('deve retornar um status 400', async () => {
      const httpTResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: 'any_email@email.com' });
      expect(httpTResponse.status).to.equal(400);
      expect(httpTResponse.body).to.deep.equal({ message: "All fields must be filled" });
    });
  });
  describe('Quando a requisição é feita com secesse', () => {
    it('deve retornar um status 200', async ()=> {
      const httpTResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: 'any_email@email.com', password: 'any_password' });
      expect(httpTResponse.status).to.be.equal(200);
    })
  })
});