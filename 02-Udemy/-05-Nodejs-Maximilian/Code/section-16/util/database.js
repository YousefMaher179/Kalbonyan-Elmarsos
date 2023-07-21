// const mongodb = require("mongodb");
// const mongoClient = mongodb.MongoClient;

// let _db;

// const mongoConnect = (callback) => {
//   mongoClient
//     .connect(
//       "mongodb+srv://YousefMaher:YousefMaher123@cluster0.jv0grvp.mongodb.net/shop"
//     )
//     .then((client) => {
//       console.log("connected!");
//       _db = client.db();
//       callback();
//     })
//     .catch((err) => {
//       console.log(err);
//       throw err;
//     });
// };

// const getDb = () => {
//   if (_db) {
//     return _db;
//   }
//   throw "No database found!";
// };

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;
