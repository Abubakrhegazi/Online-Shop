const express=require('express');
const router=express.Router();
const appController = require('../controllers/appController');
require('dotenv').config();

router.get('/home',appController.home_get);
router.get('/shop',appController.shop_get);

module.exports=router;