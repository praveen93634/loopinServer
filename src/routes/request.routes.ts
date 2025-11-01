import {Router} from "express";
import { basicAuth } from "../middleware/auth";
import { reviewConnectionRequest, sendConnectionRequest } from "../controller/request.controller";
const router:Router=Router();
router.post("/send/:status/:toUserid",
    basicAuth,
    sendConnectionRequest
);

router.post("/review/:status/:requestId",
    basicAuth,
    reviewConnectionRequest
);

export default router;