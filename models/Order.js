const { Schema, model } = require("mongoose");

const OrderSchema = new Schema({
  OrderID: String,
  ShipmentID: String,
  OrderItems: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  OrderPrice: Number,
  Email: String,
  Address: String,
  Name: String,
});

//instance methods

OrderSchema.methods.findAllOrders = (cb) => {
  return model("Order").find({ Email: this.Email }, cb);
};

//query helpers
OrderSchema.query.byID = (Id) => {
  return this.where({ OrderID: Id });
};

OrderSchema.query.byShipmentId = (ShipmentId) => {
  return this.where({ ShipmentID: ShipmentId });
};

OrderSchema.query.ByEmail = (email) => {
  return this.where({ Email: email });
};

const OrderModel = model("Order", OrderSchema);

module.exports = OrderModel;
