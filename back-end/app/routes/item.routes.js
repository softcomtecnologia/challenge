import express from "express";
import { 
    itensList,
    itemFindById,
    itemCreate,
    itemUpdate,
    itemDelete
} from "../controllers/item.controller.js";

import { verifyToken } from "../middlewares/authJwt.js";

const router = express.Router(); 

router.get("/item", [verifyToken], itensList);

router.get("/item/:id", [verifyToken], itemFindById);

router.post("/item", [verifyToken], itemCreate);

router.put("/item/:id", [verifyToken], itemUpdate);

router.delete("/item/:id", [verifyToken], itemDelete);

export default router;
