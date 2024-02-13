import express from "express";
import { createListing, deleteListing, updateListing } from "../listing.controller.js";
import { verifyToken } from "../utiles/veryfyUser.js";

const router =express.Router();

router.post('/create',verifyToken,createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateListing);

export default router;