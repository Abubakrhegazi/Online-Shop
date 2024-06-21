const jwt= require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const userModel=require('../models/users');
require('dotenv').config()

const maxAge=3*24*60*60;
const secret=process.env.secret;
const createToken=(id)=>{
    return jwt.sign({id},secret,{expiresIn: maxAge});
}
//sign up
module.exports={
    signup_get: (req, res) => {
        res.render('signup', { title: 'Signup' ,error:'.',currentPage:'signup'});
    },
    signup_post: async(req, res) => {
	    try {
            const password =req.body.password;
            if(password.length<6||password.length>16){
                res.render('signup', { title: 'Signup',error: 'Password should be at least 6 characters long and no more than 16 characters.',currentPage:'signup' });
            }
            //Create a new user using the User model
            const newUser = new userModel({
                name:req.body.name,
                email:req.body.email,
                password:bcrypt.hashSync(password,10)
            });
            // Save the new user to the database
            await newUser.save();
            //token
            const token=createToken(newUser._id);
            res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000});
            // Redirect to a success page or login page
            res.redirect('/');
        } catch (err) {
            console.error('Error during sign-up:', err.message);
            if (err.code === 11000) {
                // Handle duplicate email error
                res.render('signup', { title: 'Signup',error: 'This email is already registered.',currentPage:'signup'});
            } else {
                // Handle other errors
                const errorMessage=err.message;
                emailError=errorMessage.split(" ");
                res.render('signup', {title: 'Signup', error: emailError.slice(4).join(" "),currentPage:'signup'});
            }
        }
    },
//login
    login_get: (req, res) => {
        res.render('login', { title: 'Login' ,error:'.',currentPage:'login'});
    },
    login_post: async(req, res) => {
        const user = await userModel.findOne({ email: req.body.email });
        
        if (user && bcrypt.compareSync(req.body.password, user.password)) {
            const token=createToken(user._id);
            res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000});
            console.log("User authenticated", token);
            res.redirect('/');
        }else if (!user) {	
            res.render('login', { title: 'Login',error:'Email not registered',currentPage:'login'});
            console.log("User not found");
        } else {
            console.log("Invalid credentials");
            res.render('login', { title: 'Login',error:'Incorrect password',currentPage:'login'});
        }
    },
//logout
    logout_get:(req,res)=>{
        res.cookie('jwt','',{maxAge:1});
        res.redirect('/')
    }
}
