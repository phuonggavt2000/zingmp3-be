import express from "express";
import * as controllers from "../controllers";

const router = express.Router();

router.post("/register", controllers.register);
router.post("/login", controllers.login);

export default router;
