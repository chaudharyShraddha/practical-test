const EmployeeModel = require("../../database/employee");

exports.addEmployee = async (data) => {
  try {
    const { fname, lname, email, salary } = data;

    const newEmployee = new EmployeeModel({
      fname,
      lname,
      email,
      salary,
    });
    const createdEmployee = await newEmployee.save();
    return createdEmployee;
  } catch (error) {
    console.log("error", error);
  }
};

exports.getAllEmployee = async () => {
  try {
    const employees = await EmployeeModel.find();
    return employees;
  } catch (error) {
    console.log("error", error);
  }
};

exports.getEmployeeById = async (employee_id) => {
  try {
    const employee = await EmployeeModel.findById(employee_id);
    return employee;
  } catch (error) {
    console.log("error", error);
  }
};
