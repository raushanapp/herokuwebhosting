const app =require("./index");

const connect = require("./config/db");
const port = process.env.PORT ||2000
app.listen(port, async()=>{

   try{
       await connect();
       console.log("Listeing on ports 2000...");

   }catch(err){
       console.error({message:err.message});
   }

})