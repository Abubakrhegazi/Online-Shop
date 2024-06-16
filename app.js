const express = require('express');
const morgan = require('morgan');
const appRoutes = require('./routes/appRoutes')
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config()
app.listen(8000); // port



app.use(morgan('dev')); //k
app.use(express.json({ limit: '50mb' }));  //karim + bysr3 al donia
app.use(express.urlencoded({ extended: true })); //karim
app.use('/', appRoutes);//btwdyny 3la al ana 3yzah
app.use(express.static('public'));

mongoose.connect(process.env.dbURL)
	.then(() => { //zy try w btkmal al b3dyha
		app.listen(process.env.PORT, () => {
			console.log('db connected and listening to port');
		})
	})
	.catch((err) => {
		console.log(err)
	})

app.set('view engine', 'ejs'); //karim
app.set('views', 'views');
app.get('/', (req, res) => {
	res.redirect('/home');
})

app.use((req, res) => {
	res.status(404).render('404', { title: "404" }); // law error
})