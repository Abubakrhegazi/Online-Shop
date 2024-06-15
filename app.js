const express= require('express');
const morgan=require('morgan');
const cors=require('cors');
const mongoose=require('mongoose');
const app = express();

app.use(morgan('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.dbURL)
.then(()=>{
	app.listen(process.env.PORT,()=>{
		console.log('db connected and listening to port');
	})
})
.catch((err)=>{
	console.log(err)
})

app