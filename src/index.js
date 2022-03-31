const express = require("express"); 
const userController = require("./controller/userController")
const {register,login} = require("./controller/authenticationController")     // login and regiter password
const postController = require("./controller/postController");
const cors = require("cors")
// const app = express();

// // console.log("expamle",app)
// app.use(cors())
app.use(express.json());
app.use("/users",userController)
app.use("/post",postController);

app.post("/register",register);
app.post("/login",login);

module.exports = app;


