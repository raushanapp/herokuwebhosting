const app =require("./index");

const connect = require("./config/db");

app.listen(2000, async()=>{

   try{
       await connect();
       console.log("Listeing on ports 2000...");

   }catch(err){
       console.error({message:err.message});
   }

})