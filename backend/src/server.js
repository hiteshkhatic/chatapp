const cors = require('cors')
const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db.js")
const userRouter = require("./routes/user.route")
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

connectDB()

app.get("/", (req, res) => {
  res.send("Backend is working!")
})

app.use("/user", userRouter)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
