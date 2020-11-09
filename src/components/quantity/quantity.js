import './quantity.scss';
import React,{ useState, useEffect }  from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/actions';

function Quantity (props) {
    const inputRef=React.useRef(0);
    //set default value of input value with quantity from another pages
    console.log(props)
    // props.quantityValue=props.quantity
    // console.log(props.quantityValue)
    const [inputValue, setinputValue] = useState(props.quantity);
    useEffect(() => {
        console.log(inputRef.current.value)
    });
   const decreaseValue=()=>{
    //    if(inputValue<=0){
    //          setinputValue(0)
    //    }else{
    //        setinputValue(inputValue-1)
    //    }
    //     console.log(props.onChangeQuantity(inputValue))
       props.decrementQuantity(props.quantity)
    }
    const increaseValue=()=>{
    //    setinputValue(inputValue+1)
    //     console.log(props.onChangeQuantity(inputValue))
        props.incrementQuantity(props.quantity)
    }
    const handleChange = (event) =>{
        // console.log(props)
        // setinputValue(event.target.value);
    //   console.log(onChangeQuantity(inputValue))
    }

    return ( 
        <div className="quantity">
            <div className="value-button" id="decrease" onClick={decreaseValue} value="Decrease Value">-</div>
            <input type="number" id="number" value={(props.quantityValue)?props.quantityValue:inputValue} ref={inputRef}  onChange={handleChange}/>
            <div className="value-button" id="increase" onClick={increaseValue} value="Increase Value">+</div>
        </div> 
    );   
}
 


function mapDispatchToProps(dispatch){
  return{
    initializeQuantity:(quantity)=>dispatch(actions.initializeQuantity(quantity)),
    decrementQuantity: (quantity)=>dispatch(actions.decrementQuantity(quantity)),
    incrementQuantity:(quantity)=>dispatch(actions.incrementQuantity(quantity)),
  }
} 
function mapStateToProps(state){
  console.log(state)
  //  console.log(state.productsReducer)
  return{
    quantityValue:state.cartReducer.quantityValue
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Quantity); 