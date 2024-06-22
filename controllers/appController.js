const express = require('express')
require("dotenv").config()
const Product = require('../models/product');

function cap(str) {
    if (!str) return str;
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
let likedItems = [];
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

            res.render('shop', { title: 'Shop', currentPage: 'shop', data: data, query: undefined, totalPages: totalPages, current_page: page });
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
            const category = req.params.category;
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
            res.render('category', { title: 'Shop', category: category, currentPage: 'shop', data: data, query: undefined, totalPages: totalPages, currentPage: page });
        } catch (error) {
            console.error('Error fetching products:', error);
            res.status(500).send('An error occurred while fetching products');
        }
    },

    search_get: async (req, res) => {
        const { srch } = req.query;
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

            res.render('shop', { title: 'Shop', currentPage: 'shop', data: data, query: srch, totalPages: totalPages, current_page: page });
        } catch (error) {
            console.error('Error fetching products:', error);
            res.status(500).send('An error occurred while fetching products');
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
            const id = req.params.id;
            product = Product.findById(id);
            const { name, description, category, type, brand, price } = req.body;

            image = (req.body.path || product.image);
            // Update the product by ID
            await Product.findByIdAndUpdate(id, {
                image,
                name,
                description,
                category,
                type,
                brand,
                price
            });

            res.redirect('/admin');
        } catch (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        }
    },
    // liked: (req, res) => {
    //     const { productId, action } = req.body;

    //     if (action === 'add') {
    //         // Add the product to liked items
    //         if (!likedItems.includes(productId)) {
    //             likedItems.push(productId);
    //         }
    //     } else if (action === 'remove') {
    //         // Remove the product from liked items
    //         likedItems = likedItems.filter(item => item !== productId);
    //     }

    //     // Respond with the updated liked items
    //     res.json({ likedItems });
    // },

};
