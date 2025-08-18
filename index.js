import express from "express";
import router from "./router/auth.js";
import connectToMongo from "./database/Db.js";


const app=express();
connectToMongo();

const port=3000;

app.use(express.json());

//router here
app.use('/api/auth',router)

app.listen(port,()=>{
    console.log(`server is running on port https://localhost:${port}`);
})