if(process.env.NODE_ENV!="production"){
    require('dotenv').config();
 }
let express=require("express");
app=express();
let session=require('express-session');
const MongoStore = require('connect-mongo');
let ejs=require("ejs");
let listing=require("./routes/listing.js");
let reviews=require("./routes/review.js");
let users=require("./routes/user.js");
let mongoose=require("mongoose");
let path=require("path");
let methodoverride=require("method-override");
let ejsmate=require('ejs-mate');
let expresserror=require("./utils/expresserror.js");
let flash=require('connect-flash');
let user=require("./model/userSchema.js");
let wrapasync = require("./utils/wrapasync.js");
let passport=require("passport");
let LocalStrategy=require("passport-local");

app.use(methodoverride("_method"));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set(path.join(__dirname,"views"));
app.use(express.urlencoded({extended : true}));
app.engine('ejs', ejsmate);
app.use(flash());


let atlas_url=process.env.ATLASDB_URL;
//connection
main()
.then((res)=>{
    console.log("connection successful");
})
.catch((err)=>{
console.log(err);
});
async function main(){
    await mongoose.connect(atlas_url);
};

const store=MongoStore.create({
    mongoUrl:atlas_url,
    crypto:{
        secret:process.env.SECRET
    },
    touchAfter: 24*3600,
})

store.on("error",()=>{
    console.log("ERROR IS MONGO SESION STORE",err);
})

//session
sessionOptions={
    store,
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized : true,
    cookie : {
        expires: Date.now() + 7*24*60*60*1000,
        maxage:7*24*60*60*1000,
        httpOnly:true
    }
}


app.use(session(sessionOptions));


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.curruser=req.user;
    next();
});

//router
app.use("/listing",listing);
app.use("/listing/:id/review",reviews);
app.use("/user",users);

//error handlers
app.all("*",(req,res,next)=>{
    next(new expresserror(404,"page not found"));
});
app.use((err,req,res,next)=>{
    let{status=500,message="Something went wrong!"}=err;
    res.render("./Listing/error.ejs",{err});
});

//start server
app.listen(3000,()=>{
    console.log("port is listening to port 3000");
});

app.use((req,res)=>{
    res.send("welcome to root");
});