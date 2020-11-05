import './quantity.scss';
import React,{ useState, useEffect }  from 'react';

function Quantity () {
      const inputRef=React.useRef(0);
const [inputValue, setinputValue] = useState(0);
   useEffect(() => {
    // Update the document title using the browser API
     console.log(inputRef)
     console.log(inputRef.current.value)
      console.log(inputValue)
  });
   const decreaseValue=()=>{
        console.log(inputValue)
        if(inputValue<=0){setinputValue(0)}else{ setinputValue(inputValue - 1)}
    }
    const increaseValue=()=>{
        console.log(inputValue)
         setinputValue(inputValue + 1)
    }
    const handleChange = (event) =>{
        setinputValue(event.target.value)
    }
        return ( <div className="quantity">
            <div class="value-button" id="decrease" onClick={decreaseValue} value="Decrease Value">-</div>
            <input type="number" id="number" value={inputValue} ref={inputRef}  onChange={handleChange}/>
            <div class="value-button" id="increase" onClick={increaseValue} value="Increase Value">+</div>
        </div> 
        );   
}
 
export default Quantity;