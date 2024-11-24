import mongoose from "mongoose";
import products from "./data.js";
import Product from "../models/product.js";

const seedProducts = async () => {
  try {
    await mongoose.connect(
      //"mongodb+srv://enzogabrielos235:enzotest@cluster0.gunzl.mongodb.net/shopit-v2?retryWrites=true&w=majority&appName=Cluster0"
      "mongodb+srv://enzogabrielos235:enzotest@cluster0.gunzl.mongodb.net/shopit-v2"
    );

    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(products);
    console.log("Products are added");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
