
const mongoose = require('mongoose');

const postSchema =  new mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
},{
    timestamps:true,
    versionKey:false,
});

module.exports = mongoose.model("post",postSchema);