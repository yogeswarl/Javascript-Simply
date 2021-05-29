const path = require('path')
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const morgon = require('morgan');
const passport  = require('passport');
const session = require('express-session');
const methodOverride = require('method-override')
const MongoStore = require('connect-mongo');
const hbs = require('express-handlebars')
// internal files
const connectDB = require('./config/db');


dotenv.config({ path: "./config/config.env" });

// passport config
require('./config/passport')(passport)

connectDB()
const app = express();


app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(methodOverride(function(req,res){
	if(req.body && typeof req.body ==='object' && '_method' in req.body){
		let method = req.body._method;
		delete req.body._method;
		return method;
	}
}))

if(process.env.NODE_ENV === 'development') {
	app.use(morgon('dev'))
}
const { formatDate, truncate, stripTags, editIcon, select } = require("./helpers/hbs");

app.engine(
	"hbs",
	hbs({ 
		helpers: {
			formatDate,
			truncate,
			stripTags,
			editIcon,
			select
		},
		defaultLayout: "main",
		extname: "hbs"
	})
);
app.set('view engine', 'hbs')

app.use(
	session({
		secret: "key hodl",
		resave: false,
		saveUninitialized: true,
		store: MongoStore.create({
			mongoUrl: process.env.MONGO_URI,
			mongooseConnection: mongoose.connection,
			ttl: 14 * 24 * 60 * 60 // save session for 14 days
		}),
	})
);
//passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(function (req,res,next) {
	res.locals.user = req.user || null;
	next()
})

app.use(express.static(path.join(__dirname,'public')))
app.use('/',require('./routes/index'))
app.use('/auth',require('./routes/auth'))
app.use('/stories',require('./routes/stories'))

const PORT = process.env.PORT || 5000;
app.listen(
	PORT,
	console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
