import store from '../../redux/store/index';
import * as actions from '../../redux/actions/actions';
// import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const handleRequest= (request)=>{
    // console.log("interceptor request")
    // console.log(request)
    // toast("Products is comming !", {
    //     position: toast.POSITION.TOP_CENTER
    //   });
    store.dispatch(actions.loading(true))
   
    // console.log(store.dispatch(actions.loading(true)))
    return request
}
export const handleResponse= (response)=>{
    // console.log(response)
    // toast.dismiss();
    store.dispatch(actions.loading(false))
    // toast.success("Enjoy Products", {
    //         position: toast.POSITION.TOP_CENTER
    //     });
    
    // console.log(store.dispatch(actions.loading(false)))

    return response
}
export const handleError= (error)=>{
    // console.log(error)
    store.dispatch(actions.loading(false))
    // toast.error("sorry !");
    // console.log(store.dispatch(actions.loading(false)))

      return Promise.reject({ ...error })
}