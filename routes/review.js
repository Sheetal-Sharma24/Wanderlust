let express=require("express");
let router=express.Router({mergeParams: true});
let wrapasync=require("../utils/wrapasync.js");
let review=require("../model/reviewModel.js");
let Listing=require("../model/test.js");
const { islogin,isAuthor,validateReview } = require("../middleware.js");
const reviewController=require("../controllers/reviews.js")

  //add review
router.post("/",islogin,validateReview,wrapasync(reviewController.addnewReview));

  //delete review
router.delete("/:revid",islogin,isAuthor,wrapasync(reviewController.deleteReview));

module.exports=router;