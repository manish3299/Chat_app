const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

//original: "mongodb+srv://Manish:d7SElinYkq93Kofo@cluster0.oosa2ge.mongodb.net/?retryWrites=true&w=majority"
//mongodb://amigo_mernchat:<password>@ac-w1uubob-shard-00-00.kfsvgde.mongodb.net:27017,ac-w1uubob-shard-00-01.kfsvgde.mongodb.net:27017,ac-w1uubob-shard-00-02.kfsvgde.mongodb.net:27017/?ssl=true&replicaSet=atlas-fz8ae8-shard-0&authSource=admin&retryWrites=true&w=majority

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://amigo_mernchat:ZO26yZu3ptxZDT6h@ac-w1uubob-shard-00-00.kfsvgde.mongodb.net:27017,ac-w1uubob-shard-00-01.kfsvgde.mongodb.net:27017,ac-w1uubob-shard-00-02.kfsvgde.mongodb.net:27017/?ssl=true&replicaSet=atlas-fz8ae8-shard-0&authSource=admin&retryWrites=true&w=majority",
      {
        useNewUrlParser: false,
        useUnifiedTopology: false,
        useFindAndModify: false,
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
