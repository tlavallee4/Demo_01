// gets access to the router
import express, { Router } from "express";

// importing objects from other objects
import * as itemController from "../controllers/itemController";

// const means cannot change. we want one route to contain in our entire application
const router: Router = express.Router();

// use router to map all endpoints to control all of our actions 
// id represents a specific item in that resource 
router.get("/", itemController.getAllItems);
router.post("/", itemController.createItem);
router.put("/:id", itemController.updateItem);
router.delete(":id", itemController.deleteItem);

// to use this file in another file
export default router;