import store from "../../redux/store/index";
import * as actions from "../../redux/actions/actions";
import "react-toastify/dist/ReactToastify.css";

export const handleRequest = (request) => {
  store.dispatch(actions.loading(true));
  return request;
};
export const handleResponse = (response) => {
  store.dispatch(actions.loading(false));
  return response;
};
export const handleError = (error) => {
  store.dispatch(actions.loading(false));
  return Promise.reject({ ...error });
};
