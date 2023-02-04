import { Router } from "express";

import {
  getLoginUser,
  createUser
} from "../controllers/auth.controller.js";

const router = Router();

router.get("/", getLoginUser);
router.post("/", createUser);


export default router;
