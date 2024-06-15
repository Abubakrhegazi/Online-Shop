const express=require('express')
require("dotenv").config()

module.exports={
    home_get:(req,res)=>{
        res.render('index',{title:'Home'});
    },
    shop_get:(req,res)=>{
        res.render('shop',{title:'shop'});
    }
}