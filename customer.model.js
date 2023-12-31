import mongoose from "mongoose";
const customer_schema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    phone:{type:String},
    personal_address:{type:String},
    location:{
        state:{type:String},
        district:{type:String},
        pincode:{type:String},
        place:{type:String},
        landmark:{type:String},
        street:{type:String}
    },
    photo:{type:String}
})

export default mongoose.model.cutomers||mongoose.model("cutomer",customer_schema)