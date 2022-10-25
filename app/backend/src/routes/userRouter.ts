import { Router } from 'express';
import validation from '../middlewares/validation';
import UserController from '../controllers/Usercontroller';
import authMiddleware from '../middlewares/Auth.midleware';
import TeamsController from '../controllers/TeamsController';

const userController = new UserController();
const teamsController = new TeamsController();

const router = Router();

router
  .post('/login', validation, (req, res) => (userController.makelogin(req, res)));
router
  .get('/login/validate', authMiddleware);
router
  .get('/teams', (req, res) => teamsController.getAll(req, res));
router
  .get('/teams/:id', (req, res) => teamsController.getById(req, res));

// eslint-disable-next-line import/prefer-default-export
export { router as userRouter };
