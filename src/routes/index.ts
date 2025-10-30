import { Router } from "express";
import authRoutes from './auth.routes';
const route = Router();
route.use('/auth',authRoutes)
export default route;