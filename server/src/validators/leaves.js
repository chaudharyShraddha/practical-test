const joi = require("@hapi/joi");

exports.validateLeaveData = async (req, res, next) => {
  const packet = {
    ...req.body,
  };

  const schema = joi.object({
    type: joi.string().required(),
    date: joi.date().required(),
    reason: joi.string().required(),
    employee_id: joi.string().required(),
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
