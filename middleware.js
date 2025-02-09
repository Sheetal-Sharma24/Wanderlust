const Review = require("./model/reviewModel.js");
let Listing=require("./model/test.js");
const {listingschema,reviewSchema}=require("./schema.js");
let expresserror=require("./utils/expresserror.js");

module.exports.validateLisitng=(req,res,next)=>{
    const {error}=listingschema.validate(req.body);
    if(error){
        const errormsg=error.details.map((el)=>el.message).join(",");
        throw new expresserror(400,errormsg);
    }
    else{
        
        next();
        }
}


module.exports.validateReview=(req,res,next)=>{
    const {error}=reviewSchema.validate(req.body);
    if(error){
      console.log(error);
        const errormsg=error.details.map((el)=>el.message).join(",");
        throw new expresserror(400,errormsg);
    }
    else{
        next();
        }
}

module.exports.islogin=(req,res,next)=>{
    req.session.redirectUrl=req.originalUrl;
    if(!req.isAuthenticated()){
        req.flash("error","User must be logged in ");
        return res.redirect("/user/login");
    }  
    next();
};

module.exports.redirectpath=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.url=req.session.redirectUrl;
        console.log("redirect data : ",res.locals.url);
    }
    next();
}
module.exports.isOwner=async(req,res,next)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    console.log(res.locals.curruser._id);
    let userid=res.locals.curruser._id;
    if(!listing.owner.equals(userid))
    {
    req.flash("error","You are not the owner of this lisitng.");
    return res.redirect(`/home/${id}`);
}
next();
};
module.exports.isAuthor=async(req,res,next)=>{
    let {revid,id}=req.params;
    let review=await Review.findById(revid);
    //let userid=res.locals.curruser._id;
    if(!review.author.equals(req.user._id))
    {
    req.flash("error","You are not the author of this review.");
    return res.redirect(`/listing/${id}`);
}
next();
};
