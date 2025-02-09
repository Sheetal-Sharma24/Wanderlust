let mongoose=require("mongoose");
const user = require("./userSchema");
let Schema=mongoose.Schema;
const reviewSchema=new Schema({
    rating:
    {
        type:Number,
        min:1,
        max:5
    },
    comments :
    {
        type:String
    },
    author:
    {
        type:mongoose.Types.ObjectId,
        ref:user
    }
});

let review=new mongoose.model("review",reviewSchema);
module.exports=review;