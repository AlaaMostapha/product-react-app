export const handleRequest = (request) => {
  return request;
};
export const handleResponse = (response) => {
  return response;
};
export const handleError = (error) => {
  return Promise.reject({ ...error });
};
