import express, { Router } from 'express';
import { registerUser, loginUser } from '../controllers/auth.controllers';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
