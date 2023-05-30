// import express, { Router } from 'express';
// import Categories from '../models/model.js'

const express=require('express')
const router=require('express').Router()
const Category=require('../models/model.js')


// router.post('/',async(req,res)=>{
//     const user=req.body;
//     console.log(user)
//     const krisha=new Category(user)

//     try{ 
//         await krisha.save()
//         res.status(300).json(krisha)

//     }catch(error){
//         res.status(400).json({message:error.message})
//     }
// })
router.post("/", async (req, res) => {
    console.log(req.body);
    const { name,hobbies, email, phone } = req.body;
    try {
      const userAdded = await Category.create({
        name: name,
        hobbies:hobbies,
        email: email,
        phone: phone,
      });
      res.status(201).json(userAdded);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  });

//GET
router.get("/all", async (req, res) => {
    try {
      const allUsers = await Category.find();
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

//GET SINGLE USER
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    
    try {
      const singleUser = await Category.findById({ _id: id });
      res.status(200).json(singleUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

//DELETE
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deletedUser = await Category.findByIdAndDelete({ _id: id });
      res.status(201).json(deletedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

//UPDATE
router.patch("/:id", async (req, res) => {
    const { id } = req.params;
  
    // console.log("get body", req.body);
    // console.log("get id", id);
    //const { name, email, age } = req.body;
    try {
      const updatedUser = await Category.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
// export default router;


// const controller = require('../controller/controller');
// const router = require('express').Router();


// router.route('/api/categories')
//     .post(controller.create_Categories)
//     .get(controller.get_Categories)

module.exports = router;