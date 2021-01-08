var mongoose = require("mongoose");
const Joi = require("@hapi/joi");
var productSchema = mongoose.Schema({
  author_name: String,
  novel_name: String,
  price: Number,
  genre: String,
});
var Product = mongoose.model("Product", productSchema);

function validateProduct(data) {
  const schema = Joi.object({
    author_name: Joi.string().min(3).max(100).required(),
    novel_name: Joi.string().min(3).max(100).required(),
    price: Joi.number().min(0).required(),
    genre: Joi.string().min(3).max(100).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.Product = Product;
module.exports.validate = validateProduct;
