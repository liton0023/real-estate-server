import express from 'express';
import { test, updateUser } from '../user.controllers.js';
import { verifyToken } from '../utiles/veryfyUser.js';


const router= express.Router();

router.get('/test',test)
router.post('/update/:id',verifyToken,updateUser)


export default router;