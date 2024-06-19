const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const product=new Schema({
	image:{
		type: String,
        required: true
	},
	name:{
		type: String,
		required: true
	},
	description:{
		type: String,
		required: true
	},
	price:{
		type: Number,
		required: true
	},
	category:{
		type: String,
		required: true
	},
	type:{
		type: String,
		required: true
	},
	brand:{
		type:String,
		required:true
	},
	color:{
		type:String,
		required:true
	},
    // rating:{
    //     type:Number           lesa for creativity
    // }
},{timestamps:true}); // el wa2t bta3 el product et3amal eh
const Product=mongoose.model('product',product);
module.exports=Product;
