const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  ID: String,
  Name: String,
  Size: String,
  Price: Number,
  Department: String,
});

ProductSchema.query.byId = (Id) => {
  return this.where({
    ID: id,
  });
};

ProductSchema.query.ByDepartment = (department) => {
  return this.where({ Department: department });
};

ProductSchema.query.ByPrice = (start, end) => {
  return this.where("Price").gt(start).lt(end);
};

ProductSchema.methods.findSimilar = (cb) => {
  return model("Product").find({ Department: this.department }, cb);
};

const ProductModel = model("Product", ProductSchema);

module.exports = ProductModel;
