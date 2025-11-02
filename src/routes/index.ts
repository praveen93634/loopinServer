import { Router } from "express";
import authRoutes from './auth.routes';
import userRoutes from './user.route';
import requestRoutes from './request.routes';
import chatRouter from './chat.routes'
import { request } from "http";
const route = Router();
route.use('/auth',authRoutes)
route.use('/user',userRoutes)
route.use('/request',requestRoutes)
route.use('/chat',chatRouter)
export default route;