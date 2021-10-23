import axios from "../store/constants/config";

export const backendServices = {
  get,
  post,
  put,
  deleteUrl,
};

async function deleteUrl(url, params) {
  const token = localStorage.getItem("token");
  const header = token
    ? { "x-auth-token": token }
    : {
        "content-type": "application/json",
      };

  try {
    const response = await axios.delete(url, { headers: header });
    return response;
  } catch (error) {
    throw error;
  }
}

async function post(url, params) {
  let header = {
    "content-type": "application/json",
  };

  const token = localStorage.getItem("token");
  if (token) {
    header = { "x-auth-token": token, "Content-Type": "application/json" };
  }

  try {
    const response = await axios.post(url, params, { headers: header });
    return response;
  } catch (error) {
    throw error;
  }
}

async function get(url, params) {
  const token = localStorage.getItem("token");
  const header = token
    ? { "x-auth-token": token }
    : {
        "content-type": "application/json",
      };

  try {
    let config = {
      headers: header,
      params: params?.params ? params.params : null,
    };
    const response = await axios.get(url, config);
    return response;
  } catch (error) {
    throw error;
  }
}

async function put(url, parameters) {
  let header = {
    "content-type": "application/json",
  };

  const token = localStorage.getItem("token");
  if (token) {
    header = { "x-auth-token": token, "Content-Type": "application/json" };
  }

  try {
    const response = await axios.put(url, parameters, { headers: header });
    return response;
  } catch (error) {
    throw error;
  }
}