const { response } = require("express");
let Listing=require("../model/test.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const maptoken=process.env.MAP_TOKEN
const geocodingClient = mbxGeocoding({ accessToken: maptoken });
//homepage
module.exports.index=async (req,res)=>{
    let listing=await Listing.find();
    res.render("./Listing/home.ejs",{listing});
};

//particular listing
module.exports.filterListing=async(req,res)=>{
    let {filter}=req.params;
    let listing=await Listing.find({category: filter});
    res.render("./Listing/home.ejs",{listing});
}
//new listing
module.exports.newListingform=(req,res)=>{
    res.render("./Listing/new.ejs");
}

module.exports.addnewListing=async(req,res,next)=>{
    let response=await geocodingClient.forwardGeocode({
        query: req.body.listing.loc,
        limit: 2
      })
        .send()

    const url=req.file.path;
    const filename=req.file.filename;
    let newListing=req.body;
    newListing.owner=req.user._id;
    let newlist= new Listing(req.body.listing);
    newlist.geometry=response.body.features[0].geometry;
    newlist.owner=req.user._id;
    newlist.img={url,filename};
    let s=await newlist.save();
    req.flash("success","New listing added successfully");
    res.redirect("/listing");
}

//show listing
module.exports.showlisitng =async (req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id).populate({path:"review",populate:{path:"author"}}).populate("owner");
    if(!listing){
        req.flash("error","listing you are requested for does not exit");
        res.redirect("/listing");
    }
   res.render("./Listing/show.ejs",{listing});
}

//edit page
module.exports.editListingForm=async (req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    let Originalurl=listing.img.url;
    Originalurl=Originalurl.replace("/upload","/upload/h_300,w_250");
    if(!listing){
        req.flash("error","listing you are requested for does not exit");
        res.redirect("/listing");
    }
    res.render("./Listing/edit.ejs",{listing,Originalurl});
}

module.exports.editlisitng=async (req,res)=>{
    let {id}=req.params;
    let list=req.body.Listing;
    let listing=await Listing.findByIdAndUpdate(id,{...list},{new : true});
    if(typeof req.file!=="undefined"){
        const url=req.file.path;
        const filename=req.file.filename;
        listing.img={url,filename};
        await listing.save();
    }
    req.flash("success","listing edited successfully");
    res.redirect(`/listing/${id}`);
}

//delete listing
module.exports.deletelisting=async (req,res)=>{
    let{id}=req.params;
    let listing=await Listing.findById(id);
    console.log(listing);
    let result=await Listing.findByIdAndDelete(id);
    req.flash("success","listing deleted successfully");
    res.redirect("/listing");
}