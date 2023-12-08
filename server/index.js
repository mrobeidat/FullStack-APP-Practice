import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import PostRoutes from './routes/posts.js'
const app = express()


app.use('/posts', PostRoutes)
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

const CONNECTION_URL = process.env.CONNECTION_URL


// **used for avoid warnings or errors in the console**//
// **{ useNewUrlParser: true, useUnifiedTopology: true }, mongoose.set('useFindAndModify', false)**//

const PORT = process.env.PORT || 5000
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => app.listen(PORT, () => console.log(`listening on ${PORT}`))).catch((error) => console.log(error.message))

