const express=require("express");

const connectDb=require("./config/dbConnection");

const errorHandler = require("./middlewares/errorhandler");


const dotenv = require("dotenv");
dotenv.config();

connectDb(); //jo service bnyi h use  call kra h 


const app=express();
const port=process.env.PORT || 5000;

app.get('/',(req,res) => {
    res.send("working");
});

app.listen(port,() =>{
    console.log(`server running on port http://localhost:${port}`);
  });

