const joi = require("@hapi/joi");

exports.validateEmployeeData = async (req, res, next) => {
  const packet = {
    ...req.body,
  };

  const schema = joi.object({
    fname: joi.string().required(),
    lname: joi.string().required(),
    email: joi.string().email().required(),
    salary: joi.number().required(),
  });

  try {
    const result = await schema.validateAsync(packet);
    if (result) {
      next();
    }
  } catch (error) {
    return res.status(400).json({
      error_type: "VALIDATION_ERROR",
      error_message: error.details[0].message,
    });
  }
};
