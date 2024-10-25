import axios from "axios";

export const defaultRequest = new Promise((resolve, reject) => {
  resolve("Success");
  reject("Error");
});

export const configuration = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getRequest = (url, data = {}, token) => {
  const config = configuration(token);
  return token ? axios.get(url, data, config) : defaultRequest;
};

export const postRequest = (url, data = {}, token) => {
  const config = configuration(token);
  return token ? axios.post(BASE_URL + url, data, config) : defaultRequest;
};
export const patchRequest = (url, data = {}, token) => {
  const config = configuration(token);
  return token ? axios.patch(BASE_URL + url, data, config) : defaultRequest;
};
export const putRequest = (url, data = {}, token) => {
  const config = configuration(token);
  return token ? axios.put(BASE_URL + url, data, config) : defaultRequest;
};
export const deleteRequest = (url, token) => {
  const config = configuration(token);
  return token ? axios.delete(BASE_URL + url, config) : defaultRequest;
}; 
export const post = (url, data = {}, config) => axios.post(BASE_URL + url, data, config);
