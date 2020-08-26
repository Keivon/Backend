const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');



const port = process.env.PORT || 3000;

//Import Routes
const getReviews = require('./routes/getSellerReviews');
const userRoute = require('./routes/users');
const reviewRoute = require('./routes/review');
const getNearestSeller = require('./routes/getNearestSeller');

dotenv.config();


//Connect to DB
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true, useUnifiedTopology: true }, 
() => console.log('connected to db!'));

//Middlewares
app.use(express.json());


//Route Middlewares
app.use('/users', userRoute);
app.use('/review', reviewRoute);
app.use('/getAllSellers', getReviews);
app.use('/getNearestSeller', getNearestSeller);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});