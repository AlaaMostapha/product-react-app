import './quantity.scss';
import React,{ useState, useEffect }  from 'react';
// import {connect} from 'react-redux';


function Quantity ({onChangeQuantity,quantity}) {
    const inputRef=React.useRef(0);
    //set default value of input value with quantity from another pages
    const [inputValue, setinputValue] = useState(quantity);
    useEffect(() => {
        // Update the document title using the browser API
        // console.log(inputRef)
        // console.log(inputRef.current.value)
        // console.log(onChangeQuantity(inputValue))
        // console.log(props)
        //   props.onChangeQuantity("x")
        // console.log(quantity)
    });
   const decreaseValue=()=>{
      
        if(inputValue<=0){setinputValue(0)}else{ setinputValue(inputValue - 1)}

         console.log(onChangeQuantity(inputValue))
    }
    const increaseValue=()=>{
        
         setinputValue(inputValue + 1)
        //  console.log(inputValue)
        //  quantity=inputValue;
        //  console.log(quantity)
         console.log(onChangeQuantity(inputValue))
    }
    const handleChange = (event) =>{
        // console.log(props)
        setinputValue(event.target.value);
      console.log(onChangeQuantity(inputValue))
    }

    return ( 
        <div className="quantity">
            <div className="value-button" id="decrease" onClick={decreaseValue} value="Decrease Value">-</div>
            <input type="number" id="number" value={inputValue} ref={inputRef}  onChange={handleChange}/>
            <div className="value-button" id="increase" onClick={increaseValue} value="Increase Value">+</div>
        </div> 
    );   
}
 
export default Quantity;
// function mapStateToProps(state){
// //   console.log(state)
//   // if(state.cartReducer.newItemData.newItem)console.log(state.cartReducer.newItemData.newItem)
//   //  console.log(state.productsReducer)
//   return{
//     // quantity:state.cartReducer.quantity,
//   }
// }
// export default connect(mapStateToProps,null)(Quantity); 