import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

// Route for creating a new account (POST /api/users/register)
router.post('/register', registerUser);

// Route for logging in (POST /api/users/login)
router.post('/login', loginUser);

export default router;