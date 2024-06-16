const express = require('express')
require("dotenv").config()
const Product = require('../models/product');

module.exports = {
    home_get: (req, res) => {
        res.render('index', { title: 'Home', currentPage: 'home'});
    },
    shop_get: async(req, res) => {
        const data = await Product.find().sort({ createdAt: -1 }); // bey sort bel geh el awl
        res.render('shop', { title: 'Shop', currentPage: 'shop',data:data});
    },
    about_get: (req, res) => {
        res.render('about', { title: 'About', currentPage: 'about' });
    },
    contact_get: (req, res) => {
        res.render('contact', { title: 'Contact', currentPage: 'contact' });
    },
    cart_get: (req, res) => {
        res.render('cart', { title: 'Cart', currentPage: 'cart' });
    },
    profile_get: (req, res) => {
        res.render('profile', { title: 'Profile', currentPage: 'profile' });
    },
    login_get: (req, res) => {
        res.render('login', { title: 'Login', currentPage: 'login' });
    },
};
