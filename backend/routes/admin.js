import express from 'express'
import { protect } from '../middlewares/AuthMiddleWare.js'
import { authorize } from '../middlewares/authorized.js'
const router = express.Router()

router.get('/dashboard', protect, authorize('admin'), (req, res) => {
        res.json({
            message: `welcome to special route ${req.user.name}`
        })
})

export default router