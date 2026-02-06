const { StatusCodes } = require("http-status-codes")
const User = require("../models/User")




const registerUser = async (req, res) => {
    const { name, email, password } = req.body

    if (!name) {
        res.status(StatusCodes.NOT_FOUND)
        throw new Error("Name is required")
    }
    if (!email) {
        res.status(StatusCodes.NOT_FOUND)
        throw new Error("Email is required")
    }
    if (!password) {
        res.status(StatusCodes.NOT_FOUND)
        throw new Error("Password is required")
    }

    const user = await User.create({
        name,
        email,
        password
    })

    res.status(StatusCodes.CREATED).json(user)
}

const loginrUser = async (req, res) => {
    const { email, password } = req.body

    
}


module.exports = {
    registerUser,
    loginrUser
}