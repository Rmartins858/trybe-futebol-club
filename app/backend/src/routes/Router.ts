import { Router } from 'express';
import validation from '../middlewares/validation';
import UserController from '../controllers/Usercontroller';
import authMiddleware from '../middlewares/Auth.midleware';
import TeamsController from '../controllers/TeamsController';
import MatchController from '../controllers/MatchController';
import AuthMatches from '../middlewares/Auth.Matches';

const userController = new UserController();
const teamsController = new TeamsController();
const matchController = new MatchController();
const authMatches = new AuthMatches();

const router = Router();

router
  .post('/login', validation, (req, res) => (userController.makelogin(req, res)));
router
  .get('/login/validate', authMiddleware);
router
  .get('/teams', (req, res) => teamsController.getAll(req, res));
router
  .get('/teams/:id', (req, res) => teamsController.getById(req, res));
router
  .get('/matches', (req, res) => matchController.getAll(req, res));
router
  .post('/matches', authMatches.authMatches, (req, res) => matchController.createMatch(req, res));
router
  .patch('/matches/:id/finish', (req, res) => matchController.matchChangeStatus(req, res));
// eslint-disable-next-line import/prefer-default-export
export { router as userRouter };
