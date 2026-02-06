const express = require("express")
const userRouter = require("./src/routes/userRoute")
const { default: mongoose } = require("mongoose")
const app = express()
require("dotenv").config()

app.use(express.json())

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Mongodb Connected...");
        
    })
    .catch((e) => {
        console.log(e);     
    })

app.get("/users", userRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server Runinng on http://localhost:${PORT}`))