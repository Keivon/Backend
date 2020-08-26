const Joi = require('@hapi/joi');

const signUpValidation = (data) => {
    const schema = Joi.object({
    username: Joi.string().min(6).required(),
    firstName: Joi.string().min(6).required(),
    lastName: Joi.string().min(6).required(),
    address: Joi.string().min(6).required(),
    typeOfUser: Joi.string().min(1).required(),
    profession: Joi.string().min(6).required(),
    longitude: Joi.string().min(1).required(),
    latitude: Joi.string().min(1).required(),
      email: Joi.string().min(6).required().email(),
      password: Joi.string().min(6).required(),
    });
    return schema.validate(data);
  };


  const loginValidation = (data) => {
    
    const schema = Joi.object({
      email: Joi.string().min(6).required().email(),
      password: Joi.string().min(6).required(),
    });
    return schema.validate(data);
  };

  const reviewValidation = (data) => {
    const schema = Joi.object({
        reviewValue: Joi.string().min(1).required(),
        comment: Joi.string().min(6).required(),
    });
    return schema.validate(data);
  };

  module.exports.signUpValidation = signUpValidation;
  module.exports.loginValidation = loginValidation;
  module.exports.reviewValidation = reviewValidation;