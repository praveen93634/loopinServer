import { response } from "../helper/commenrespons"
const User = require('../model/user.model')
const jwt=require('jsonwebtoken')
export const basicAuth = async (req: any, res: any, next: any) => {
    try{
        const token=req.headers?.token
        if (!token) {
            return response(req, res, "Token is required", 401, "Unauthorized")
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (!decoded) {
            return response(req, res, "Invalid token", 401, "Unauthorized")
        }   
        req.user = decoded
        const user = await User.findById(req.user._id)
        next()
    } catch (error) {
       response(req, res, error, 500, error.message)
    }
}