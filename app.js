const express = require('express');
const morgan = require('morgan');
const appRoutes = require('./routes/appRoutes')
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes=require('./routes/authRoutes');
const cookieParser=require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
//initialize connection
const app = express();
require('dotenv').config()
app.listen(8000); // port
mongoose.connect(process.env.dbURL)
	.then(() => { //zy try w btkmal al b3dyha
		app.listen(process.env.PORT, () => {
			console.log('db connected and listening to port');
		})
	})
	.catch((err) => {
		console.log(err)
	})

//defining ejs views to node
app.set('view engine', 'ejs'); //karim
app.set('views', 'views');

//using
app.use(cors());
app.use(cookieParser());
app.use(morgan('dev')); //k
app.use(express.json({ limit: '50mb' }));  //karim + bysr3 al donia
app.use(express.urlencoded({ extended: true })); //karim
app.use(express.static('public'));

//routing
app.get('*', checkUser);
app.post('*', checkUser);
app.use('/',authRoutes);
app.use('/', appRoutes);//btwdyny 3la al ana 3yzah
app.get('/', (req, res) => {
	res.redirect('/home');
})
app.use((req, res) => {
	res.status(404).render('404', { title: "404" }); // law error
})