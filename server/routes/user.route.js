import express from 'express';
import { loginData } from '../controllers/user.controller.js';

const app = express.Router();


app.get('/login', loginData);



export default app;