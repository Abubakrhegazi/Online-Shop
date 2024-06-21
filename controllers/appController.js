const express = require('express')
require("dotenv").config()
const Product = require('../models/product');

function cap(str) {
    if (!str) return str;
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
module.exports = {
    details_get: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);

            if (product.image) {
                const parts = product.image.split('public');
                if (parts.length > 1) {
                    product.image = parts[1]; // Set image to the part after 'public'
                }
            }


            res.render('details', { title: 'Product Details', product: product, currentPage: 'shop' });
        } catch (error) {
            console.error('Error fetching product details', error);
            res.status(500).send('An error occurred while fetching the product details');
        }
    },
    home_get: async (req, res) => {
        const data = await Product.find({
            image: { $exists: true },
            name: { $exists: true },
            description: { $exists: true },
            category: { $exists: true },
            type: { $exists: true },
            quantity: { $exists: true },
            color: { $exists: true },
            brand: { $exists: true },
            price: { $exists: true }
        }).sort({ createdAt: -1 }).limit(4); // bey sort bel geh el awl yeb2a fel akher

        data.forEach(item => {
            if (item.image) {
                const parts = item.image.split('public');
                if (parts.length > 1) {
                    item.image = parts[1]; // Set image to the part after 'public'
                }
            }
        });
        res.render('index', { title: 'Home', currentPage: 'home', data: data });
    },
    shop_get: async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;

        const query = {
            image: { $exists: true },
            name: { $exists: true },
            description: { $exists: true },
            category: { $exists: true },
            type: { $exists: true },
            quantity: { $exists: true },
            color: { $exists: true },
            brand: { $exists: true },
            price: { $exists: true }
        };

        const totalProducts = await Product.countDocuments(query);
        const totalPages = Math.ceil(totalProducts / pageSize);

        const data = await Product.find(query)
            .sort({ createdAt: -1 })
            .skip((page - 1) * pageSize)
            .limit(pageSize);

        data.forEach(item => {
            if (item.image) {
                const parts = item.image.split('public');
                if (parts.length > 1) {
                    item.image = parts[1]; // Set image to the part after 'public'
                }
            }
        });

        res.render('shop', { title: 'Shop', currentPage: 'shop', data: data, query: undefined, totalPages: totalPages, currentPage: page });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('An error occurred while fetching products');
    }
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
    admin_get: async (req, res) => {
        const operation = req.params.operation;
        const data = await Product.find({
            image: { $exists: true },
            name: { $exists: true },
            description: { $exists: true },
            category: { $exists: true },
            type: { $exists: true },
            quantity: { $exists: true },
            color: { $exists: true },
            brand: { $exists: true },
            price: { $exists: true }
        }).sort({ createdAt: -1 }); // bey sort bel geh el awl yeb2a fel akher

        data.forEach(item => {
            if (item.image) {
                const parts = item.image.split('public');
                if (parts.length > 1) {
                    item.image = parts[1]; // Set image to the part after 'public'
                }
            }
        });
        res.render('admin', { title: 'Admin', data: data });
    },
    addProduct_post: async (req, res) => {
        try {
            const product = new Product({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                category: req.body.category,
                type: req.body.type,
                quantity: req.body.quantity,
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

    category_get: async (req, res) => {
        try {
            const category=req.params.category;
            const page = parseInt(req.query.page) || 1;
            const pageSize = parseInt(req.query.pageSize) || 10;
    
            const query = {
                image: { $exists: true },
                name: { $exists: true },
                description: { $exists: true },
                category: category,
                type: { $exists: true },
                quantity: { $exists: true },
                color: { $exists: true },
                brand: { $exists: true },
                price: { $exists: true }
            };
    
            const totalProducts = await Product.countDocuments(query);
            const totalPages = Math.ceil(totalProducts / pageSize);
    
            const data = await Product.find(query)
                .sort({ createdAt: -1 })
                .skip((page - 1) * pageSize)
                .limit(pageSize);
    
            data.forEach(item => {
                if (item.image) {
                    const parts = item.image.split('public');
                    if (parts.length > 1) {
                        item.image = parts[1]; // Set image to the part after 'public'
                    }
                }
            });
            res.render('category', { title: 'Shop', category: category, currentPage: 'shop', data: data,query: undefined, totalPages: totalPages, currentPage: page });
        } catch (error) {
            console.error('Error fetching products:', error);
            res.status(500).send('An error occurred while fetching products');
        }
    },

    search_get: async (req, res) => {
        const { query } = req.query;
        console.log('query:', query);
        try {
            const data = await Product.find({
                image: { $exists: true },
                name: { $exists: true },
                description: { $exists: true },
                category: { $exists: true },
                type: { $exists: true },
                quantity: { $exists: true },
                color: { $exists: true },
                brand: { $exists: true },
                price: { $exists: true },
                name: { $regex: query, $options: 'i' }
            }).sort({ createdAt: -1 });

            data.forEach(item => {
                if (item.image) {
                    const parts = item.image.split('public');
                    if (parts.length > 1) {
                        item.image = parts[1];
                    }
                }
            });

            res.render('shop', { title: 'Shop', currentPage: 'shop', data: data, query: query });
        } catch (err) {
            console.error('Error searching products:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    admin_crud: async (req, res) => {
        const operation = req.params.operation;
        const data = await Product.find({
            image: { $exists: true },
            name: { $exists: true },
            description: { $exists: true },
            category: { $exists: true },
            type: { $exists: true },
            quantity: { $exists: true },
            color: { $exists: true },
            brand: { $exists: true },
            price: { $exists: true }
        }).sort({ createdAt: -1 }); // bey sort bel geh el awl yeb2a fel akher

        data.forEach(item => {
            if (item.image) {
                const parts = item.image.split('public');
                if (parts.length > 1) {
                    item.image = parts[1]; // Set image to the part after 'public'
                }
            }
        });

        res.render('adminCRUD', { title: 'Admin', operation: operation, data: data });
    },

    edit_crud: async (req, res) => {
        const productId = req.params.id;

        try {
            const product = await Product.findById(productId);
            if (product.image) {
                const parts = product.image.split('public');
                if (parts.length > 1) {
                    product.image = parts[1]; // Set image to the part after 'public'
                }
            }
            res.render('editproduct', { product, title: 'Admin', cap, productCategory: product.category });
        } catch (err) {
            console.error(err);
            res.status(500).send('Failed to fetch product details');
        }
    },
    delete_crud: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);

            if (product.image) {
                const parts = product.image.split('public');
                if (parts.length > 1) {
                    product.image = parts[1]; // Set image to the part after 'public'
                }
            }


            res.render('details', { title: 'Product Details', product: product, currentPage: 'shop' });
        } catch (error) {
            console.error('Error fetching product details', error);
            res.status(500).send('An error occurred while fetching the product details');
        }
    },
    editproduct: async (req, res) => {
        try {
            // console.log(req.body);
            const productId = req.params.id;
            // console.log(productId);  
            // Product.replaceOne({ id: productId },


            // );

            const newproduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });

            console.log(newproduct);
            if (!newproduct) {
                return res.status(404).send('Product not found');
            }
            res.redirect('/admin');
        }
        catch (error) {
            console.error('Error trying to reach product ID', error);
            res.status(500).send('An error occurred while fetching the product details');
        }
    },

};
