import './quantity.scss';
import React,{ useState, useEffect }  from 'react';
import { useDispatch} from "react-redux";
// import {useSelector } from "react-redux";
import * as actions from '../../redux/actions/actions';

function Quantity({item}) {
    
// const itemQuantity = useSelector(state => state.cartReducer.cart.item.quantity);
const dispatch = useDispatch();
    const inputRef=React.useRef(0);
    //set default value of input value with quantity from another pages
    const [inputValue, setinputValue] = useState(item.quantity);
    useEffect(() => {
        // console.log(inputRef.current.value)
    //     if(item.quantity<=0){
    //       item.quantity=0
    //       setinputValue(item.quantity)
    //   }
        setinputValue(item.quantity)
        // console.log(itemQuantity)
        // inputRef.current.value=item.quantity
        
    },[item.quantity]);
   const decreaseValue=()=>{
      dispatch(actions.decrementQuantity(item))
      if(item.quantity<=0){
          item.quantity=0
          setinputValue(item.quantity)
      }
        setinputValue(item.quantity)
    }
    const increaseValue=()=>{
        dispatch(actions.incrementQuantity(item))
      setinputValue(item.quantity)
    }
    const handleChange = (event) =>{
        // console.log(props)
        // setinputValue(event.target.value);
    //   console.log(onChangeQuantity(inputValue))
    }

    return ( 
        <div className="quantity">
            <div className="value-button" id="decrease" onClick={decreaseValue} value="Decrease Value">-</div>
            <input type="number" id="number" value={inputValue} ref={inputRef}  onChange={handleChange}/>
            <div className="value-button" id="increase" onClick={increaseValue} value="Increase Value">+</div>
        </div> 
    );   
}
 


// function mapDispatchToProps(dispatch){
//   return{
//     initializeQuantity:(quantity)=>dispatch(actions.initializeQuantity(quantity)),
//     decrementQuantity: (quantity)=>dispatch(actions.decrementQuantity(quantity)),
//     incrementQuantity:(quantity)=>dispatch(actions.incrementQuantity(quantity)),
//   }
// } 
// function mapStateToProps(state){
//   console.log(state)
//   //  console.log(state.productsReducer)
//   return{
//     quantityValue:state.cartReducer.quantityValue
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Quantity); 
export default Quantity; 