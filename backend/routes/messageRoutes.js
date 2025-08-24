import express from "express";
import { protectRoute } from "../middleware/auth.js";
import { getMessages, getUsersForSidebar, markMessageAsSeen } from "../controllers/messageController";
 const MessageRouter=express.Router();

 MessageRouter.get("/users",protectRoute,getUsersForSidebar)
 MessageRouter.get("/:id",protectRoute,getMessages)
 MessageRouter.put("mark/:id",protectRoute,markMessageAsSeen)

 export default MessageRouter;