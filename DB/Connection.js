const mongoose = require("mongoose");

const URI =
  "mongodb://abc:1234@cluster0-shard-00-00.8ay7n.mongodb.net:27017,cluster0-shard-00-01.8ay7n.mongodb.net:27017,cluster0-shard-00-02.8ay7n.mongodb.net:27017/novel?ssl=true&replicaSet=atlas-145prc-shard-0&authSource=admin&retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("db connected");
};

module.exports = connectDB;
