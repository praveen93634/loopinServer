import { response } from "../helper/commenrespons"
import User from '../model/user.model';
const jwt=require('jsonwebtoken')
export const basicAuth = async (req: any, res: any, next: any) => {
    try{
        const gettoken=req.headers?.authorization.split(" ")[1];
        console.log("gettoken",gettoken);
        const token=gettoken
        if (!token) {
            return response(req, res, "Token is required", 401, "Unauthorized")
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (!decoded) {
            return response(req, res, "Invalid token", 401, "Unauthorized")
        }   
        req.user = decoded
        console.log("req.user",req.user.id);
        const user = await User.findById(req.user.id)
        next()
    } catch (error) {
       response(req, res, error, 500, error.message)
    }
}