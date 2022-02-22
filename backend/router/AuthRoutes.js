import express from "express";
import {signin_get,signin_post} from '../controller/authController.js'

const router = express.Router()

router.get('/',(signin_get))
router.post('/' , (signin_post))

export default router