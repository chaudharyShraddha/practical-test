import axios from 'axios';
import { SERVER_URL } from '../../constant/app_constant';

// staging server
export default axios.create({
  baseURL: SERVER_URL,
});
