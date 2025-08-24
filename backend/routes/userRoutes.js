import express from 'express';
import { signup, login, checkAuth, updateProfile } from '../controllers/UserController';

const userRouter=express.Router();

userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.get('/check', protectRoute, checkAuth);
userRouter.put('/update-profile', protectRoute, updateProfile);

export default userRouter;