import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import TeamsModel from '../database/models/TeamsModel';
import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

import {Teams} from './mokc/mocks.teams'

chai.use(chaiHttp);

const { expect } = chai;
describe('GET /teams', () => {
    beforeEach(sinon.restore);
    describe.only('Quando a requisição é feita com sucesso', () => {
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