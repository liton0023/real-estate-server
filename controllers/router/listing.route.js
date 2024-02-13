import express from "express";
import { createListing } from "../listing.controller.js";
import { verifyToken } from "../utiles/veryfyUser.js";

const router =express.Router();

router.post('/create',verifyToken,createListing);

export default router;