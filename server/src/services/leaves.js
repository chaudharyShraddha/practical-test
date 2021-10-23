const { addLeave, getLeaveByEmployeeId } = require("../models/leaves");

exports.addLeave = async (data) => await addLeave(data);
exports.getLeaveByEmployeeId = async (employee_id) =>
  await getLeaveByEmployeeId(employee_id);
