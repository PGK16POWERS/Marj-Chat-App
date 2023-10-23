const express = require("express");
const app = express();
const server = require("http").createServer(app);
require("dotenv").config();
const ejs = require("ejs");
const port = process.env.PORT;

app.get("/",(req,res)=>{
    res.render(path.join(__dirname, "views","index.ejs"));
});



server.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});