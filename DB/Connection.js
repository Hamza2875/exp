const mongoose =require("mongoose");

const URI = "mongodb://hamza_123:Hamza1234@cluster0-shard-00-00.k691j.mongodb.net:27017,cluster0-shard-00-01.k691j.mongodb.net:27017,cluster0-shard-00-02.k691j.mongodb.net:27017/Webfinal?ssl=true&replicaSet=atlas-9hf5fi-shard-0&authSource=admin&retryWrites=true&w=majority";
const ConnectDB = async ()=>{
    await mongoose.connect (URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    console.log(" db connected");
}
module.exports = ConnectDB;