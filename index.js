import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import routes from './routes.js'
dotenv.config()

const app = express()

app.use(express.json())
app.use('/api', routes)

const PORT = process.env.PORT
const DB_URL = process.env.DB_URL



const start = async () => {
   try {
      await mongoose.connect(DB_URL)
      app.listen(PORT, () => {
         console.log(`Starts on ${PORT}`)
      })
   } 
   catch(e) {
      console.log(e)
   }
}
start()