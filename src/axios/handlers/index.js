import store from '../../redux/store/index';
import * as actions from '../../redux/actions/actions'
export const handleRequest= (request)=>{
    // console.log("interceptor request")
    // console.log(request)
    store.dispatch(actions.loading(true))
    // console.log(store.dispatch(actions.loading(true)))
    return request
}
export const handleResponse= (response)=>{
    // console.log(response)
    store.dispatch(actions.loading(false))
    // console.log(store.dispatch(actions.loading(false)))

    return response
}
export const handleError= (error)=>{
    // console.log(error)
    store.dispatch(actions.loading(false))
    // console.log(store.dispatch(actions.loading(false)))

      return Promise.reject({ ...error })
}