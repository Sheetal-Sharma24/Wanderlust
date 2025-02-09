let review=require("../model/reviewModel.js");
let Listing=require("../model/test.js");
//new review
module.exports.addnewReview=async(req,res)=>{
    let {id}=req.params;
    let newlist=await Listing.findById(id);
    let rev=req.body.review;
    let newreview=new review(rev);
    newreview.author=req.user;
    newlist.review.push(newreview);
    let result1=await newreview.save();
    let result2=await newlist.save();
    req.flash("success","New review added successfully");
    res.redirect(`/listing/${id}`);
}

//delete review
module.exports.deleteReview=async(req,res)=>{
    let {listingid,reviewid}=req.params;
    let result1=await Listing.findByIdAndUpdate(req.params.id,{$pull : {review : req.params.revid}},{new:true});
    let result2=await review.findByIdAndDelete(req.params.revid);
    req.flash("success","review deleted successfully");
    res.redirect(`/listing/${req.params.id}`);
}