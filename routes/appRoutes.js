const express=require('express');
const router=express.Router();
const appController = require('../controllers/appController');
require('dotenv').config();

router.get('/home',appController.home_get);
router.get('/shop',appController.shop_get);
router.get('/about',appController.about_get);
router.get('/contact',appController.contact_get);
router.get('/cart',appController.cart_get);
router.get('/profile',appController.profile_get);
router.get('/login',appController.login_get);

module.exports=router;