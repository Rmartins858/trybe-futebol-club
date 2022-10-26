import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import TeamsModel from '../database/models/TeamsModel';
import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

import {Teams, teamsId} from './mokc/mocks.teams'

chai.use(chaiHttp);

const { expect } = chai;
describe('GET /teams', () => {
    beforeEach(sinon.restore);
    describe('Quando a requisição é feita com sucesso', () => {
      it('deve retornar um status 200', async ()=> {
        sinon.stub(TeamsModel, 'findAll').resolves(Teams as TeamsModel[]);
        const httpTResponse = await chai
          .request(app)
          .get('/teams')
        expect(httpTResponse.status).to.deep.equal(200);
        expect(httpTResponse.body).to.deep.equal(Teams);
      })
    })
    
  });

  describe('GET /teams/:id', () => {
    beforeEach(sinon.restore);
  
    it('Quando a requisição é feita com sucesso', async () => {
      sinon.stub(TeamsModel, 'findOne').resolves(teamsId as TeamsModel);
  
      const response = await chai.request(app).get('/teams/1');
  
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(teamsId);
    });
  })