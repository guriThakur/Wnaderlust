const joi=require("joi");
// module.exports.listingSchema=joi.object({
//     listing:joi.object({
//         title:joi.string().required(),
//         description:joi.string().required(),
//         Image:joi.string().allow("", null),
//         price:joi.number().required().min(0),
//         country:joi.string().required(),
//         location:joi.string().required()
//     }).required()
// });

module.exports.listingSchema = joi.object({
  listing: joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
    price: joi.number().required().min(0),
    country: joi.string().required(),
    location: joi.string().required(),
    image: joi.any().optional().allow("", null),   
  }).required()
}).options({ stripUnknown: true });   

module.exports.reviewSchema=joi.object({
    review:joi.object({
        rating:joi.number().required().min(1).max(5),
        comment:joi.string().required(),
}).required(),
});