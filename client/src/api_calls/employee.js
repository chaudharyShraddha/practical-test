import axios from "axios";
import { employee_url } from "../constant/api_urls";

import { services } from "../services/index";

axios.defaults.withCredentials = true;

export const addEmployeeData = (packet) =>
  services
    .post(employee_url, packet)
    .then((response) => response)
    .catch((err) => {
      throw err;
    });

export const getAllEmployeesData = () =>
  services
    .get(employee_url)
    .then((response) => response)
    .catch((err) => {
      throw err;
    });
