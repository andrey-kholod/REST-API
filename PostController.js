import PostService from "./PostService.js";
import User from "./User.js";

class PostController {
   async create(req, res) {
      try {
         const user = await PostService.create(req.body)
         res.status(200).json(user)
      }
      catch(e) {
         console.log(e)
         res.status(500).json(e)
      }
   }
   async findAll(req, res) {
      try {
         const posts = await PostService.findAll()
         res.json(posts)
      }
      catch(e) {
         res.json(e)
      }
   }
   async findByID(req, res) {
      console.log(req.params.id)
      try {
         const currentUser = await PostService.findByID(req.params.id)
         res.json(currentUser)
      }
      catch(e) {
         res.json(e)
      }
   }
   async delete(req, res) {
      try {
         const removeUser = await PostService.delete(req.params.id)
         res.json(removeUser)
      }
      catch(e) {
         res.json(e)
      }
   }
   async putObject(req, res) {
      try {
         const putDoc = await PostService.putObject(req.body)
         res.json(putDoc)
      }
      catch(e) {
         res.json(e.message)
      }
   }
}

export default new PostController()