import { Router } from 'express';
import * as authController from '../controllers/authController.js';

const router = Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/reset-password', authController.resetPassword);

router.post('/google-signin', authController.googleSignIn);

export default router;
