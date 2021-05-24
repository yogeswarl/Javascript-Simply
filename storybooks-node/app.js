const path = require('path')
const express = require("express");
const dotenv = require("dotenv");
const morgon = require('morgan');
const passport  = require('passport');
const session = require('express-session');
const hbs = require('express-handlebars')
// internal files
const connectDB = require('./config/db');

dotenv.config({ path: "./config/config.env" });

// passport config
require('./config/passport')(passport)

connectDB()
const app = express();

if(process.env.NODE_ENV === 'development') {
	app.use(morgon('dev'))
}


app.engine("hbs", hbs({ defaultLayout: "main" , extname: "hbs" }));
app.set('view engine', 'hbs')

app.use(
	session({
		secret: "key hodl",
		resave: false,
		saveUninitialized: true,
	})
);
//passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(express.static(path.join(__dirname,'public')))
app.use('/',require('./routes/index'))
app.use('/auth',require('./routes/auth'))

const PORT = process.env.PORT || 5000;
app.listen(
	PORT,
	console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
