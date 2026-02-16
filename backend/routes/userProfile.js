import express from 'express'
import { protect } from '../middlewares/AuthMiddleWare.js'
const router = express.Router()

router.get('/profile' , protect , (req, res) => {
    res.json(req.user.email)
} )
export default router