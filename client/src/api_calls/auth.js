import axios from "axios";
import { login_url, signup_url } from "../constant/api_urls";

import { services } from "../services/index";

axios.defaults.withCredentials = true;

export const loginUser = (packet) => services.post(login_url, packet);

export const registerUser = (packet) => services.post(signup_url, packet);
