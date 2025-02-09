
let express=require("express");
let router=express.Router();
let wrapasync=require("../utils/wrapasync.js");
const { islogin ,isOwner,validateLisitng} = require("../middleware.js");
const listingController=require("../controllers/listings.js")
const multer  = require('multer');
const {storage}=require("../cloudConfig.js")
const upload = multer({storage})

//new listing
router.get("/new",islogin,listingController.newListingform);

router.route("/")
.get(wrapasync(listingController.index))
.post( upload.single('listing[img]'),validateLisitng,wrapasync(listingController.addnewListing)); 
// .post( upload.single('listing[img]'),(req,res)=>{
//     //res.send(req.file);
//     console.log(req.body)
//     console.log(req.file);
// })

//particular listing
router.route("/filter/:filter")
.get(wrapasync(listingController.filterListing));


router.route("/:id")
.get(wrapasync(listingController.showlisitng))
.put(islogin,isOwner,upload.single('Listing[img]'),wrapasync(listingController.editlisitng))
.delete(islogin,isOwner,wrapasync(listingController.deletelisting));

//edit page
router.get("/:id/edit",islogin,isOwner,wrapasync(listingController.editListingForm));


module.exports=router;

