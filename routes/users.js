const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const { signUpValidation, loginValidation } = require('../validation');



router.post('/signup', async (req, res) => {
    //Validate the data from the user
    
    const { error } = signUpValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Checking if the user is already in the database
    
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send("email already exists");
    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);


    //Create a new user
    const user = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        typeOfUser: req.body.typeOfUser,
        profession: req.body.profession,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        email: req.body.email,
        password: hashPassword
    });
    try {

        const savedUser = await user.save();
        res.send({ user });
    } catch (err) {
        resres.status(400).send(err);
    }
});



router.post('/login', async (req, res) => {
 //Validate the data from the user
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    // Checking if the email exists

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Email or password is wrong");
    // check if the password is correct
    const validpass = await bcrypt.compare(req.body.password, user.password);
    if(!validpass) return res.status(400).send("Email or password is wrong")
    res.json(user)
    
});

router.get('/getAllSellers', async (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
       
   });

module.exports = router;