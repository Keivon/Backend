const router = require('express').Router();
const User = require('../model/User');
const Review = require('../model/Review');
const { reviewValidation } = require('../validation');


router.post('/', async (req, res) =>{
    const id = req.query.sellerId;

    User.findOne({_id: id})
    .then(()=> {
    
    const { error } = reviewValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Create a new review
    const review = new Review({
        id: id,
        reviewValue: req.body.reviewValue,
        comment: req.body.comment
    });
    try {

        const savedReview =  review.save();
        res.send({ review });
    } catch (err) {
        res.status(400).send(err);
    }
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;