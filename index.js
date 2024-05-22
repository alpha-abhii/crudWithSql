import express from "express"
import router from "./routes/index.js";
import "./db/index.js"
import { connectToDB } from "./db/index.js";


const app = express();

app.use(express.json())

app.use("/api/v1/products",router)

const PORT = process.env.PORT || 5000;

connectToDB()
    .then(() => {
        app.listen(PORT,()=>{
            console.log(`Server is listening at port ${PORT}`)
        })
    })
    .catch(err => {
        console.log("Error occurred with mysql connection",err);
        process.exit(0);
    })