import mongoose from "mongoose";

const connectDb = (url) => {
    mongoose.set('strictQuery', true);
}

mongoose
    .connect(url)
    .then(() => {
        console.log("Connected to Mongo Db")
    }).catch((error) => {
        console.log(`Error ${error}`)
    });

export default connectDb;