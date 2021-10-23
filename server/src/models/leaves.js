const LeavesModel = require("../../database/leaves");

exports.addLeave = async (data) => {
  try {
    const { type, date, reason, employee_id } = data;

    const newLeave = new LeavesModel({
      type,
      date,
      reason,
      employee_id,
    });
    const createdLeave = await newLeave.save();
    return createdLeave;
  } catch (error) {
    console.log("error", error);
  }
};

exports.getLeaveByEmployeeId = async (employee_id) => {
  try {
    const leave = await LeavesModel.find({ employee_id }).sort({"createdAt": -1});
    return leave;
  } catch (error) {
    console.log("error", error);
  }
};
