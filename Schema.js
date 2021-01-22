const { products, users, orders } = require("./mockData");

module.exports = {
  Types: `type Product {ID:String,Name:String,Size:String,Price:String,Department:String}
          type User {ID:String,UserName:String,Name:String,Address:String,Email:String}
          type Order {OrderID:String,ShipmentID:String,OrderItems:[Product],OrderPrice:Int,Email:String,Address:String,Name:String}
          type Query {
          products:[Product],
          Orders:[Order],
          Users: [User]
        }`,
  Resolvers: {
    Query: {
      products: () => products,
      Orders: () => orders,
      Users: () => users,
    },
  },
};
