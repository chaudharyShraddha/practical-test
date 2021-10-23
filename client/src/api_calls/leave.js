import axios from "axios";
import { leave_url, leave_by_employee_id_url } from "../constant/api_urls";

import { services } from "../services/index";

axios.defaults.withCredentials = true;

export const addLeaveData = (packet) =>
  services
    .post(leave_url, packet)
    .then((response) => response)
    .catch((err) => {
      throw err;
    });

export const getLeavesData = (employee_id) =>
  services
    .get(leave_by_employee_id_url(employee_id))
    .then((response) => response)
    .catch((err) => {
      throw err;
    });
