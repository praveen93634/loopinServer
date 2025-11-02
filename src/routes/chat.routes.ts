import { Router  } from "express";
import { basicAuth } from "../middleware/auth";
import { getChat } from "../controller/chat.controller";
const router:Router=Router();

router.get("/get/:targetid",
    basicAuth,
    getChat
)

export default router