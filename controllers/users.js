let user=require("../model/userSchema.js");

//signin
module.exports.signinform=async(req,res)=>{
    res.render("./Listing/users/signin.ejs");
}

module.exports.signin=async(req,res)=>{
    let{username,email,password}=req.body;
    try{
    let newuser=new user({
        username:username,
        email:email
    });
    
        let result=await user.register(newuser,password);
        req.login(result,(err)=>{
             if(err){
                return next(err);
             }
             req.flash("success","Welcome to Wanderlust");
             res.redirect("/listing");
        });

    }
    catch(e){
        req.flash("error",e.message);
        res.redirect("/user/signin");
    }

}

//login
module.exports.loginform=async(req,res)=>{
    res.render("./Listing/users/login.ejs");
}
module.exports.login=async(req,res)=>{
    req.flash("success","Welcome back to Wanderlust");
    let redirectUrl=res.locals.url||"/listing";
    res.redirect(redirectUrl);
}

//logout

module.exports.logout=(req,res)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","Logout successfully");
        res.redirect("/listing");
    });

}