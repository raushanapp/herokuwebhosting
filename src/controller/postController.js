const express = require("express");

const router = express.Router();

const Post = require("../models/postModel");

const authenticate = require("../middleWare/authenticate")


router.post("", authenticate ,async(req,res) =>{
   req.body.userId = req.user._id;
//    console.log(req)

   try{
       const post = await Post.create(req.body);
       return res.status(201).send({post:post});

   }catch(err){
     return res.status(500).send({message: err.message});

   }

})

router.patch("/:id",authenticate,async(req,res) =>{
    
   try{
      const post = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true});
      return res.status(201).send({post:post});

  }catch(err){
    return res.status(500).send({message: err.message});

  }

})

router.get("/",async(req,res) =>{
    
  try{
     const post = await Post.find().lean().exec();
     return res.status(201).send({post:post});

 }catch(err){
   return res.status(500).send({message: err.message});

 }

})


router.delete("/:id",authenticate,async(req,res) =>{
    
   try{
      const post = await Post.findByIdAndDelete(req.params.id);
      return res.status(201).send({post:post});

  }catch(err){
    return res.status(500).send({message: err.message});

  }

})

module.exports =router;