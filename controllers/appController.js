const express=require('express')
require("dotenv").config()

module.exports = {
    home_get: (req, res) => {
        res.render('index', { title: 'Home', currentPage: 'home' });
    },
    shop_get: (req, res) => {
        res.render('shop', { title: 'Shop', currentPage: 'shop' });
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
};
