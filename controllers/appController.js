const express = require('express')
require("dotenv").config()
const Product = require('../models/product');


module.exports = {
    details_get: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            res.render('details', { title: 'Product Details', product: product });
        } catch (error) {
            console.error('Error fetching product details', error);
            res.status(500).send('An error occurred while fetching the product details');
        }
    },
    home_get: (req, res) => {
        res.render('index', { title: 'Home', currentPage: 'home' });
    },
    shop_get: async (req, res) => {
        const data = await Product.find({
            image: { $exists: true },
            name: { $exists: true },
            description: { $exists: true },
            category: { $exists: true },
            type: { $exists: true },
            color: { $exists: true },
            brand: { $exists: true },
            price: { $exists: true }
        }).sort({ createdAt: -1 }); // bey sort bel geh el awl yeb2a fel akher
        res.render('shop', { title: 'Shop', currentPage: 'shop', data: data });
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
    admin_get: (req, res) => {
        res.render('admin', { title: 'Admin' });
    },
    addProduct_post: async (req, res) => {
        try {
            console.log(req.body); // Debugging line to check the incoming request body
            console.log(req.file); // Debugging line to check the incoming file
            const product = new Product({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                category: req.body.category,
                type: req.body.type,
                brand: req.body.brand,
                color: req.body.color,
                image: req.file.path
            });
            await product.save();
            res.redirect('/admin');
        }
        catch (error) {
            console.error('Error saving product', error);
            res.status(500).send('An error occurred while saving the product');
        }
    },
};
