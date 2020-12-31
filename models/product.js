var mongoose = require("mongoose");
const Joi = require("@hapi/joi");
var productSchema = mongoose.Schema({
  author_name: String,
  email:String,
  city:String,
  genre:String,
  novel_name:String

});
var Product = mongoose.model("Product", productSchema);

function validateProduct(data) {
  const schema = Joi.object({
    author_name: Joi.string().min(3).max(100).required(),
    email: Joi.string().max(10).required(),
    city: Joi.string().max(10).required(),
    genre: Joi.string().max(10).required(),
    novel_name: Joi.string().max(10).required(),
    

  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.Product = Product;
module.exports.validate = validateProduct;
