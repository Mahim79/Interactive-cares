const {Schema,model} = require("mongoose")

const productsSchema = new Schema({ 
    name: { type: String, required: [true,"Name is required"],minlength:[4,"Name should be minimum 4 character"]}, 
    price: { type: Number, required: [true,"Price is required"] }, 
    category: { type: String, required: [true,"Category is required"] }, 
    stock: { type: Number, required: [true,"Stock is required"] }, 
    description: { type: String }, 
    createdAt: { type: Date, default: Date.now } 
  })

const products = model("products",productsSchema)

module.exports = products