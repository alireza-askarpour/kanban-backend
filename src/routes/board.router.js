import express from 'express'

import * as boardController from '../controllers/board.controller.js'
import { verifyToken } from '../middlewares/verify-token.js'

import { boardIdParamValidation } from '../validations/board.js'
import { validate } from '../utils/validation.js'
import { uploadCover } from '../middlewares/upload.middleware.js'

const router = express.Router()

router.post('/create', verifyToken, boardController.create)
router.get('/', verifyToken, boardController.getAll)
router.put('/update-position', verifyToken, boardController.updatePosition)
router.get('/favourites', verifyToken, boardController.getFavourites)
router.put('/favourites', verifyToken, boardController.updateFavouritePosition)
router.patch(
  '/upload-cover/:boardId',
  boardIdParamValidation(),
  verifyToken,
  uploadCover.single('cover'),
  boardController.uploadCover,
)
router.get('/:boardId', boardIdParamValidation(), validate, verifyToken, boardController.getOne)
router.put('/:boardId', boardIdParamValidation(), validate, verifyToken, boardController.update)
router.delete('/:boardId', boardIdParamValidation(), validate, verifyToken, boardController.deleteBoard)

export default router
