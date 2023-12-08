import express from 'express'
import { getPosts, CreatePost } from '../controllers/posts.js'

const router = express.Router()

router.get('/', getPosts)
router.post('/', CreatePost)

export default router