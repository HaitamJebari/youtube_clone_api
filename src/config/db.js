const mongoose = require("mongoose");
const appConfig = require("./appConfig");


const connectDB = async () => {
    try {
        const conn = await mongoose
            .connect(appConfig.mongoURI)
            .then(() => {
                console.log(`Mongodb Connected...`);

            })
            .catch((e) => {
                console.log(e);
                process.exit(1)
            })

    } catch (err) {

    }
}


module.exports = connectDB
