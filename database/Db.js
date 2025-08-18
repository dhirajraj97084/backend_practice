import mongoose, { connect } from "mongoose";

const connectToMongo=async()=>{
    try {
        await connect('mongodb+srv://dhirajraj97084:enotebook123@cluster0.oxiecuv.mongodb.net/');
        console.log(`***Database connectted successfully***`);
    } catch (error) {
        console.log(`Error connection to MongoDb:${error.message}`)
    }
}

export default connectToMongo;