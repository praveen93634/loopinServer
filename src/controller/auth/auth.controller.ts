import { error } from 'console';
import { response } from '../../helper/commenrespons';
const bcrypt = require('bcrypt')
import { errorMessage } from '../../helper/errorMessage';
import User, { UserDocument } from '../../model/user.model';
const jwt = require('jsonwebtoken')
import admin from 'firebase-admin';
const fireadmin = require('../../../firebaseauth');
import firebaseadmin from '../../../firebaseauth';
require('dotenv').config()

    /***
     * Author:praveen Kumar
     * Date: 26-05-2025
     * Description: This funtion is used to handle the signup 
     */
    
export const signup = async (req, res, next) => {
    try {
        console.log("req.body",req.body);
        const data:UserDocument = req.body;
        // console.log("name,email,password",name,email,password);
        const passwordhash = await bcrypt.hash(data.password, 10);
        const user = new User(data);
        user.password = passwordhash;
        const insertUser = await user.save();
        response(req, res, "", 201, "User registered successfully");
    } catch (err) {
        response(req, res, err, 500, err.message);
    }
}
/***
 * Author:praveen Kumar
 * Date: 26-05-2025
 * Description: This funtion is used to handle the login 
 */
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const data = await User.findOne({ email: email })        
        if (!data) {
            response(req, res, "login User", 422, errorMessage.invalid)
        }
        const compare = await bcrypt.compare(password, data.password)
        if (compare) {
            const gentoken = await jwt.sign({ _id: data._id}, process.env.JWT_SECRET, { expiresIn: "1d" })
            const safedata = {
                _id: data._id,
                name: data.name,
                email: data.email,
                Avatar: data.Avatar,
                location: data.location,
                bio: data.bio
            }
            response(req, res, { token: gentoken, user: safedata }, 200, "User login Sucessfully")
        }
        else {
            response(req, res, "login User", 500, errorMessage.invalid)
        }
    }
    catch (err) {
        response(req, res, err, 500, err.message)
    }
}
/***
 * Author:praveen Kumar
 * Date: 30-10-2025
 * Description: This funtion is used to handle the google sessioin login 
 */
export const loginwithgoogle = async (req, res, next) => {
    try{
        const {token}=req.body;
        console.log("token",token);
        const decodedToken = await admin.auth().verifyIdToken(token);
        console.log("decodedToken",decodedToken);
        const { uid, email, name, picture } = decodedToken;
        let user = await User.findOne({ email: email });
        if (!user) {
            user = new User({
                UserId: uid,
                email: email,
                name: name,
                Avatar: picture
            });
            await user.save();
        }
        const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        response(req, res, { token: jwtToken, user: user }, 200, "User login Successfully via Google");
    }
    catch(err){
        response(req, res, err, 500, err.message)
    }
}