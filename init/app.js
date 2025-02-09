let express=require("express");
app=express();
let mongoose=require("mongoose");
let initdata=require("./testdata.js");
let Listing=require("../model/test.js");
//connection
main()
.then((res)=>{
    console.log("connection successful");
})
.catch((err)=>{
console.log(err);
});
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Wanderlust');
};

let init=async ()=>{
    await Listing.deleteMany({});
      initdata.data=initdata.data.map((obj)=>({...obj,owner:'67496104cb918c20fd2a7c58'}));
      let res=await Listing.insertMany(initdata.data);
      console.log(res);
};
init();