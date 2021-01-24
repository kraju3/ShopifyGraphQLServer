const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  ID: String,
  UserName: String,
  Name: String,
  Address: String,
  Email: String,
});

UserSchema.query.byId = (id) => this.where({ ID: id });
UserSchema.query.byUserName = (username) => this.where({ UserName: username });
UserSchema.query.ByEmail = (email) => this.where({ Email: email });

const UserModel = model("User", UserSchema);

module.exports = UserModel;
