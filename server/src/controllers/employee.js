const {
  addEmployee,
  getAllEmployee,
  getEmployeeById,
} = require("../services/employee");

const { defaultErrorObject } = require("../constants/errors");

exports.addEmployee = async (req, res) => {
  try {
    const employee = await addEmployee(req.body);
    if (employee) {
      return res.status(200).json({
        status: true,
        message: "New employee created Successfully",
        employee,
      });
    }
  } catch (error) {
    return res.status(error.statusCode || 500).json(defaultErrorObject);
  }
};

exports.getAllEmployee = async (req, res) => {
  try {
    const employees = await getAllEmployee();
    if (employees) {
      return res.status(200).json({
        status: true,
        message: "Employees fetch Successfully",
        employees,
      });
    }
  } catch (error) {
    return res.status(error.statusCode || 500).json(defaultErrorObject);
  }
};

exports.getEmployeeById = async (req, res) => {
  try {
    const { employee_id } = req.params;
    const employee = await getEmployeeById(employee_id);
    if (employee) {
      return res.status(200).json({
        status: true,
        message: "Employee fetch Successfully",
        employee,
      });
    }
  } catch (error) {
    return res.status(error.statusCode || 500).json(defaultErrorObject);
  }
};
