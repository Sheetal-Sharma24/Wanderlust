let express=require("express");
let router=express.Router();
let wrapasync=require("../utils/wrapasync.js");
let expresserror=require("../utils/expresserror.js");
let flash=require('connect-flash');
let user=require("../model/userSchema.js");
const passport = require("passport");
const { redirectpath } = require("../middleware.js");
const userController=require("../controllers/users.js");


//user signin
router.get("/signin",wrapasync(userController.signinform));
router.post("/signin",wrapasync(userController.signin));

//User login
router.get("/login",wrapasync(userController.loginform));

router.post("/login",redirectpath,passport.authenticate(
    "local",
    {
        failureRedirect : "/user/login",
        failureFlash:true,
    }
),
wrapasync(userController.login));

//logout
router.get("/logout",userController.logout);
module.exports=router;