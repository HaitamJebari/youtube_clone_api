const express = require("express")
const userRouter = require("./src/routes/userRoute")
const connectDB = require("./src/config/db")

const app = express()
connectDB()
require("dotenv").config()

app.use(express.json())


app.get("/users", userRouter)

const PORT = process.env.PORT || 8000
app.listen(PORT, console.log(`Server Runinng on http://localhost:${PORT}`))