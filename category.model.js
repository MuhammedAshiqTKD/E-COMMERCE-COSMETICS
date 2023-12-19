import mongoose from "mongoose";


const category_schema=new mongoose.Schema({
    category_name:{type:String},
    Description:{type:String}

})



export default mongoose.model.Category||mongoose.model("Category",category_schema);