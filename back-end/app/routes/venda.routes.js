import express from "express";
import { create, findAll } from "../controllers/venda.controller.js";
import { verifyToken } from "../middlewares/authJwt.js";

const router = express.Router();

router.post("/venda", verifyToken, create);
router.get("/venda", verifyToken, findAll);

export default router;
