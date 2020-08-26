const router = require('express').Router();
const Review = require('../model/Review');




router.get('/', async (req, res) => {

    const id = req.query.sellerId;
    Review.find({id:id})
    .then(reviews => res.json(reviews))
    .catch(err => res.status(400).json('Error: ' + err));
       
   });

   module.exports = router;