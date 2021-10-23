const {
    addEmployee,
    getAllEmployee,
    getEmployeeById,
  } = require("../models/employee");

exports.addEmployee = async (data) => await addEmployee(data);
exports.getAllEmployee = async () => await getAllEmployee();
exports.getEmployeeById = async (employee_id) => await getEmployeeById(employee_id);
