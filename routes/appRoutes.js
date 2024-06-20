const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController');
const multer = require('multer');
const path = require('path');


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

        // Add code to create the order (not shown here)
        
        res.status(200).json({ message: 'Order placed successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
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
router.get('/shop', appController.shop_get);
router.get('/about', appController.about_get);
router.get('/contact', appController.contact_get);
router.get('/cart', appController.cart_get);
router.get('/profile', appController.profile_get);
router.get('/login', appController.login_get);
router.get('/admin', appController.admin_get);
router.post('/addProduct', upload.single('image'), appController.addProduct_post);
router.get('/details/:id', appController.details_get);
router.get('/search', appController.search_get);
router.get('/shop/:category', appController.category_get);
router.get('/admin/:operation', appController.admin_crud);
router.post('/editproduct/:id', appController.edit_crud);
router.post('/deleteproduct/:id', appController.delete_post);


module.exports = router;