import express from "express";
import { createListing, deleteListing, getListing, getListings, updateListing } from "../listing.controller.js";
import { verifyToken } from "../utiles/veryfyUser.js";

const router =express.Router();

// router.use(cookieParser());

router.post('/create',verifyToken,createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateListing);
router.get('/get/:id', getListing);
router.get('/get', getListings);

export default router;