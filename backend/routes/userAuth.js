import express from 'express'
import { register } from '../controllers/userAuth.js'
import { validate } from '../middlewares/validationZod.js'
import { userSchema } from '../schema/userAuthSchema.js'
const router = express.Router()

router.post('/', validate(userSchema), register)



export default router