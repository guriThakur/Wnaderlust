const Review=require("../models/review")
const Listing=require("../models/listing")

module.exports.createReview=async (req, res) => {
  console.log(req.params.id);
  const listing = await Listing.findById(req.params.id);
  const newReview =  new Review(req.body.review);
  newReview.author=req.user._id;
  console.log(newReview);
    listing.reviews.push(newReview);  
  await newReview.save();   
  await listing.save();
   req.flash("success", "one review added!");
  res.redirect(`/listing/${id}`);
};

module.exports.destroyReview=async(req, res)=>{
     let {id,reviewId}=req.params;
  await Listing.findByIdAndUpdate(id,{$pull:{reviews: reviewId}});
  await Review.findByIdAndDelete(reviewId);
req.flash("success", "one review deleted!");
  res.redirect(`/listing/${id}`);
}