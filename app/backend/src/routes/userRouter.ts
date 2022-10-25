import { Router } from 'express';
import validation from '../middlewares/validation';
import UserController from '../controllers/Usercontroller';

const userControlle = new UserController();

const router = Router();

router
  .post('/login', validation, (req, res) => (userControlle.makelogin(req, res)));

// eslint-disable-next-line import/prefer-default-export
export { router as userRouter };
