import User from "./User.js";

class PortService {
   async create(post) {
      const user = await User.create(post)
      return user;
   }
   async findAll() {
         const users = await User.find({})
         return users
   }
   async findByID(id) {
         const currentUser = await User.findById(id)
         return currentUser
   }
   async delete(id) {
         const removeUser = await User.findOneAndDelete(id)
         return removeUser
   }
   async putObject(user) {
         const putDoc = await User.findByIdAndUpdate(user._id, user, { new: true })
         return putDoc;
   }
}

export default new PortService()