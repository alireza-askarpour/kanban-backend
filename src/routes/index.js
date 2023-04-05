import express from 'express'

import authRouter from './auth.router.js'
import boardRouter from './board.router.js'
import sectionRouter from './section.router.js'
import taskRouter from './task.router.js'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/boards', boardRouter)
router.use('/boards/:boardId/sections', sectionRouter)
router.use('/boards/:boardId/tasks', taskRouter)

export default router
