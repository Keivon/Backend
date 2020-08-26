const router = require('express').Router();
const User = require('../model/User');


router.get('', async (req, res) => {

    const longitude = req.query.longitude;
    const latitude = req.query.latitude;
    const maxDistance = req.query.maxDistance;


    })
module.exports = router;