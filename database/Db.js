import mongoose, { connect } from "mongoose";
import 'dotenv/config'

const connectToMongo=async()=>{
    try {
        await connect(process.env.MONGO_URL);
        console.log(`***Database connectted successfully***`);
    } catch (error) {
        console.log(`Error connection to MongoDb:${error.message}`)
    }
}

export default connectToMongo;