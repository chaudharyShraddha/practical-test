import { SERVER_URL } from "./app_constant";

// AUTH routes
export const login_url = `${SERVER_URL}/api/auth/login`;
export const signup_url = `${SERVER_URL}/api/auth/registration`;

// EMPLOYEE routes
export const employee_url = `${SERVER_URL}/api/employee`;

// LEAVE routes
export const leave_url = `${SERVER_URL}/api/leave`;
export const leave_by_employee_id_url = (employee_id) =>
  `${SERVER_URL}/api/leave/${employee_id}`;
