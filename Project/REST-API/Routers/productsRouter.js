const express = require("express")
const products = require("../Model/productsModel")
const productsRouter = express.Router()

// Get all products
productsRouter.get("/",async (req,res)=>{

    const query = {}

    if(req.query.category){
        query.category = req.query.category
    }
    // if(req.query.price){
    //     query.price = {$lte: req.query.price }
    // }

    try{
        

        const result = await products.find(query).sort({price:1})
        console.log(result.length)
        res.status(200).send({data:result})
    }catch(err){
        console.log("Error is :",err.message);
        res.status(500).send(err.message)
    }

})

// Get specific product
productsRouter.get("/:id",async (req,res)=>{
    const {id} = req.params
    try{
        const result = await products.findOne({_id:id})
        console.log(result)
        res.status(200).send({data:result})
    }catch(err){
        console.log("Error is :",err.message);
        res.status(500).send(err.message)
    }

})

// Create a Product
productsRouter.post("/",async (req,res)=>{
    const {name,price,category,stock,description,createdAt} = req.body
    try{
        const result = await products.create({name,price,category,stock,description,createdAt})
        console.log(result)
        res.status(201).send({message:"Product added successfully",data:result})
    }catch(err){
        console.log("Error is :",err.message);
        res.status(500).send(err.errors.name.properties.message || err.message)
    }

})

// Remove a Product
productsRouter.delete("/:id",async (req,res)=>{
    const {id} = req.params
    try{
        const result = await products.deleteOne({_id:id})
        console.log(result)
        res.status(200).send({message:"Product deleted successfully",data:result})
    }catch(err){
        console.log("Error is :",err.message);
        res.status(500).send(err.message)
    }

})

// Update a Product
productsRouter.patch("/:id",async (req,res)=>{
    const {id} = req.params
    const {name,price,category,stock,description,createdAt} = req.body
    try{
        const result = await products.findByIdAndUpdate(id,{$set:{name,price,category,stock,description,createdAt}})
        console.log(result)
        res.status(200).send({message:"Product updated successfully",data:result})
    }catch(err){
        console.log("Error is :",err.message);
        res.status(500).send(err.errors.name.properties.message || err.message)
    }

})



module.exports = productsRouter