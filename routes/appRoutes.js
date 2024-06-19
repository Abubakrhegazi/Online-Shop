const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

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
router.get('/shop', appController.shop_get);
router.get('/about', appController.about_get);
router.get('/contact', appController.contact_get);
router.get('/cart', appController.cart_get);
router.get('/profile', appController.profile_get);
router.get('/login', appController.login_get);
router.get('/admin', appController.admin_get);
router.post('/addProduct', upload.single('image'), appController.addProduct_post);
module.exports = router;