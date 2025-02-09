let mongoose=require("mongoose");
const review = require("./reviewModel");
const passportLocalMongoose=require("passport-local-mongoose");
const userSchema=new mongoose.Schema({
    email : 
    {
        type : String,
        required : true
    }
});

userSchema.plugin(passportLocalMongoose);

const user=new mongoose.model("user",userSchema);
module.exports=user;