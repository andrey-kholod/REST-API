
import { Router } from "express";
import PostController from "./PostController.js";

const router = new Router()

router.post('/posts', PostController.create)
router.get('/posts', PostController.findAll)
router.get('/posts/:id', PostController.findByID)
router.delete('/posts/:id', PostController.delete)
router.put('/posts', PostController.putObject)

export default router