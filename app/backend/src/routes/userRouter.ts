import { Router } from 'express';
import validation from '../middlewares/validation';
import UserController from '../controllers/Usercontroller';
import authMiddleware from '../middlewares/Auth.midleware';

const userControlle = new UserController();

const router = Router();

router
  .post('/login', validation, (req, res) => (userControlle.makelogin(req, res)));
router
  .get('/login/validate', authMiddleware);

// eslint-disable-next-line import/prefer-default-export
export { router as userRouter };
