const mongodb = require("mongodb");
const client = mongodb.MongoClient.connect(
  "mongodb://localhost:27017/vue_express", (err) => {
    if(!err) {
        console.log("Connected Database Success");
    }else {
        console.log("No Connected Database Success");
    }
  },
  "posts"
);

module.exports = client;
