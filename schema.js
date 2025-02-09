const Joi=require('joi');
module.exports.listingschema=Joi.object({
    listing:Joi.object({
        title:Joi.string().required(),
        des:Joi.string().required(),
        loc:Joi.string().required(),
        country:Joi.string().required(),
        category:Joi.string().required(),
        price:Joi.number().required().min(0),
        img:Joi.string().allow("",null),
    }).required()
    
});
module.exports.reviewSchema=Joi.object({
    review:Joi.object({
        rating:Joi.number().required().min(1).max(5),
        comments:Joi.string().required(),
    }).required()
    
});