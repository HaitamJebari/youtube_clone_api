//use object
require('dotenv').config()

//object to access all the envirement variable here
const appConfig = {
    port: process.env.PORT || 8000,
    nodeEnv: process.env.NODE_ENV || "development",
    mongoURI: process.env.MONGODB_URI ,
    mongoURI: process.env.MONGODB_URI ,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET ,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET ,
    accessTokenExpiry: process.env.ACCESS_TOKEN_EXPIRY ,
    refreshTokenExpiry: process.env.REFRESH_TOKEN_EXPIRY ,
    cloudinary : {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
    },
    corsOrigin: process.env.CORS_ORIGIN
}

module.exports = appConfig