import { Router } from "express";
import { basicAuth } from "../middleware/auth";
import { getAllUsers, getpendingRequests, getUserById, updateUserProfile } from "../controller/user.controller";
const router: Router = Router();

router.put("/getAllUsers",
    basicAuth,
    getAllUsers
)
router.get("/requests/received",
    basicAuth,
    getpendingRequests
)
router.put("/update",
    basicAuth,
    updateUserProfile
)
router.get("/getSingleUser/:userid",
    basicAuth,
    getUserById
)
export default router;
