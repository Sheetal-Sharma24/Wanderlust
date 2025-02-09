
let mongoose=require("mongoose");
const review = require("./reviewModel");
const user = require("./userSchema");
const { required } = require("joi");

const listingSchema=mongoose.Schema({
    title :
    {
        type : String,
        required : true
    },
    des : 
    {
        type : String,
    },
    img : 
    {
        filename:String,
        url:String,
    },
    price :
    {
        type : Number,
    },
    loc :
    {
        type : String,
    },
    country :
    {
        type : String
    },
    category : 
    {
        type : String
    },
    review :[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:review
        }
    ],
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref:user
    },
    geometry : {
        type:{
            type:String,
            enum:['Point'],
            required:true
        },
        coordinates:{
            type:[Number],
            required:true
        }
    }
});

listingSchema.post("findOneAndDelete",async (Listing)=>{
    if(Listing){
        await review.deleteMany({_id : {$in :Listing.review}});
    }
});
let Listing=new mongoose.model("Listing",listingSchema);
module.exports=Listing;