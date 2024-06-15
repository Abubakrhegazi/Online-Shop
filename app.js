const express = require('express');
const morgan = require('morgan');
const appRoutes = require('./routes/appRoutes')
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config()
app.listen(8000); // port



app.use(morgan('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use('/', appRoutes);
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.dbURL)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log('db connected and listening to port');
		})
	})
	.catch((err) => {
		console.log(err)
	})

app.set('view engine', 'ejs');
app.set('views', 'views');
app.get('/', (req, res) => {
	res.redirect('/home');
})

app.use((req, res) => {
	res.status(404).render('404', { title: "404" }); // law error
})