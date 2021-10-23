const joi = require('@hapi/joi');

exports.validateAuthLogin = async (req, res, next) => {
  const packet = {
    ...req.body,
  };

  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });

  try {
    const result = await schema.validateAsync(packet);
    if (result) {
      next();
    }
  } catch (error) {
    return res.status(400).json({
      error_type: 'VALIDATION_ERROR',
      error_message: error.details[0].message,
    });
  }
};

exports.validateUser = async (req, res, next) => {
  const packet = {
    ...req.body,
  };

  const schema = joi.object({
    fname: joi.string().required(),
    lname: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).max(20),
  });

  try {
    const result = await schema.validateAsync(packet);
    if (result) {
      next();
    }
  } catch (error) {
    return res.status(400).json({
      error_type: 'VALIDATION_ERROR',
      error_message: error.details[0].message,
    });
  }
};
