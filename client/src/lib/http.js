import axios from 'axios';

// When building the client into a static file, we do not need to include the server path as it is returned by it
const domain =
  import.meta.env.VITE_NODE_ENV === 'production' ? '' : 'http://localhost:3300';

// HTTP function to make requests with customizable options
const http = (
  url,
  {
    method = 'GET',
    data = undefined,
    contentType = 'application/json',
    token = null,
  }
) => {
  // Set default headers with Content-Type
  const headers = {
    'Content-Type': contentType,
  };

  // If a token is provided, add it to the request headers
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // Check if the request is a POST or PUT and the content type is 'multipart/form-data'
  if (
    (method === 'POST' || method === 'PUT' || method === 'PATCH') &&
    contentType === 'multipart/form-data' &&
    !(data instanceof FormData)
  ) {
    // If so, create a FormData object and append JSON data to it
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    // Make the request with the FormData
    data = formData; // Use the prepared FormData object
  }

  // For other cases (GET, POST/PUT with 'application/json'), make the request with the provided data
  return axios({
    headers,
    url: `${domain}${url}`,
    method,
    data,
  });
};

// Main functions to handle different types of endpoints
const get = (url, opts = {}) => http(url, { ...opts });
const post = (url, opts = {}) => http(url, { method: 'POST', ...opts });
const patch = (url, opts = {}) => http(url, { method: 'PATCH', ...opts });
const put = (url, opts = {}) => http(url, { method: 'PUT', ...opts });
const del = (url, opts = {}) => http(url, { method: 'DELETE', ...opts });

const methods = {
  get,
  post,
  patch,
  put,
  delete: del,
};

export default methods;
