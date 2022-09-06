import express from 'express'
import { verifyToken } from '../middlewares/verifyToken.js'
import * as boardController from '../controllers/boardController.js'

const router = express.Router()

router.post('/create', verifyToken, boardController.create)
router.get('/', verifyToken, boardController.getAll)
router.get('/update', verifyToken, boardController.updatePosition)

export default router
