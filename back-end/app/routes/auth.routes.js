import express from "express";
import { signup, signin } from "../controllers/auth.controller.js";
import {
    checkDuplicateUsernameOrEmailOrCnpj,
} from "../middlewares/verifySignUp.js";
 
const router = express.Router();

router.post("/auth/sign_up", checkDuplicateUsernameOrEmailOrCnpj, signup);
 
router.post("/auth/sign_in", signin);
 
export default router;