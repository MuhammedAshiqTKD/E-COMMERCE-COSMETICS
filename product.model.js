import mongoose from "mongoose";
const product_schema=new mongoose.Schema({
    product_name:{type:String},
    category_name:{type:String},
    Description:{type:String},
    price:{type:String},
    stoke:{type:String},
    images:{type:Object},
    banner:{type:String}
})

export default mongoose.model.products||mongoose.model("product",product_schema)