const express = require('express');
const router = express.Router();
const { makeApiRequest } = require('./apiservice');
const {requireAuth}=require('../middleware/authMiddleware') 
const appController = require('../controllers/appController');
const multer = require('multer');
const path = require('path');
require('dotenv').config();
const bodyParser = require('body-parser');
const User = require('../models/users');
const Product = require('../models/product');


router.post('/order', async (req, res) => {
    try {
        const { productId, orderQuantity } = req.body;

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        if (product.quantity < orderQuantity) {
            return res.status(400).json({ message: 'Insufficient quantity. This product is sold out.' });
        }

        product.quantity -= orderQuantity;
        await product.save();

        
        res.status(200).json({ message: 'Order placed successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
});
router.post('/exampleRoute', async (req, res) => {
    try {
        const requestData = {
            // Define request data as needed
            prompt: req.body.prompt,
            max_tokens: req.body.max_tokens
        };
        const apiResponse = await makeApiRequest(requestData);
        res.json(apiResponse);
    } catch (error) {
        res.status(500).json({ message: 'Failed to process request', error: error.message });
    }
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/uploads/')); // Save images to the 'public/uploads/' directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Add timestamp to ensure unique filenames
    }
});

const upload = multer({ storage: storage });

router.get('/home', appController.home_get);
router.get('/shop',  appController.shop_get);
router.get('/about', appController.about_get);
router.get('/contact', appController.contact_get);
router.get('/cart', requireAuth,appController.cart_get);
router.get('/profile', appController.profile_get);
router.get('/admin', requireAuth,appController.admin_get);
router.get('/details/:id', appController.details_get);
router.get('/search', appController.search_get);
router.post('/addtocart/:id', requireAuth ,appController.addToCart);
router.get('/admin/:operation', appController.admin_crud); 
router.get('/shop/:category', appController.category_get);
router.get('/edit/:id', appController.edit_crud);
router.post('/addProduct', upload.single('image'), appController.addProduct_post);
router.post('/editproduct/:id',upload.single('image'), appController.editproduct);
router.post('/api/chat',appController.chat_post);
router.get('/currency',appController.currency_get);
// router.post('/updateLikedItems', appController.liked);


module.exports = router;