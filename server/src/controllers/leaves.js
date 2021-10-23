const { addLeave, getLeaveByEmployeeId } = require("../services/leaves");

const { defaultErrorObject } = require("../constants/errors");

exports.addLeave = async (req, res) => {
  try {
    const leave = await addLeave(req.body);
    if (leave) {
      return res.status(200).json({
        status: true,
        message: "New leave created Successfully",
        leave,
      });
    }
  } catch (error) {
    return res.status(error.statusCode || 500).json(defaultErrorObject);
  }
};

exports.getLeaveByEmployeeId = async (req, res) => {
  try {
    const { employee_id } = req.params;
    const leave = await getLeaveByEmployeeId(employee_id);
    if (leave) {
      return res.status(200).json({
        status: true,
        message: "leaves fetch Successfully",
        leave,
      });
    }
  } catch (error) {
    return res.status(error.statusCode || 500).json(defaultErrorObject);
  }
};