
require("dotenv").config();

const jwt = require("jsonwebtoken");

const verifyToken = (token) =>{

  return new Promise((reslove,reject) =>{

    jwt.verify(token,"masaikey",(err,decoded)=>{

      if (err) return reject(err);

      return reslove(decoded);
    })
  });
};

const authenticate = async(req,res,next) =>{

    if (!req.headers.authorization)
    return res.status(400).send({message:"Authorization token is not found and incorrect1"});

    if (!req.headers.authorization.startsWith("Bearer "))
    return res.status(400).send({message:"Authorization token is not found and incorrect2"});
    
    const token = req.headers.authorization.trim().split(" ")[1];
    // console.log(token)
    let decoded ;

    try{
       decoded = await verifyToken(token);
    }catch(err){
      return res.status(400).send({message:"Authorization token is not found and incorrect3"});

    };
    // console.log("Decode -->",decoded);

    req.user = decoded.user;

    next();
};

module.exports = authenticate;