const { products, users, orders } = require("./mockData");

module.exports = {
  Types: `
          type Product {ID:ID!,Name:String,Size:String,Price:String,Department:String}
          type User {ID:ID!,UserName:String,Name:String,Address:String,Email:String}
          type Order {OrderID:String,ShipmentID:String,OrderItems:[Product],OrderPrice:Int,Email:String,Address:String,Name:String}
          
          type Query {
              Products:{
                products:[Product]
              }
              Orders:{
                orders:[Order]
              }
              Users:{
                users:[User]
              }
          }`,
  Resolvers: {
    Query: {
      Products: {
        products: () => products,
      },
      Orders: {
        orders: () => orders,
      },
      Users: {
        users: () => users,
      },
    },
  },
};
