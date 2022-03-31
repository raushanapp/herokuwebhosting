const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
    // firstName :{type:String,rquired:true},
    email :{type:String,required:true,unique:true},
    mobileNumber:{type:Number,required:false,min:10,},
    password:{type:String,required:true},
},{
    timestamps:true,
    versionKey:false
});


userSchema.pre("save", function(next) {
    if (!this.isModified("password")) return next();

    let hash = bcrypt.hashSync(this.password,8);
    this.password = hash;
    return next();
});

userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
};



module.exports = mongoose.model("user",userSchema);