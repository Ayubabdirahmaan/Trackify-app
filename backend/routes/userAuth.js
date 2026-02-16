import express from 'express'
import { login, register } from '../controllers/userAuth.js'
import { validate } from '../middlewares/validationZod.js'
import { userSchema } from '../schema/userAuthSchema.js'
const router = express.Router()

router.post('/register', validate(userSchema), register)
router.post('/login', login)



export default router