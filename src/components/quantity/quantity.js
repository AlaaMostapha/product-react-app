import "./quantity.scss";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as cartActions from "../../redux/actions/cart";

function Quantity(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const inputRef = React.useRef(0);
  //set default value of input value with quantity from another pages
  const [inputValue, setinputValue] = useState(item.quantity);
  useEffect(() => {
    setinputValue(item.quantity);
  }, [item.quantity]);

  const decreaseValue = () => {
    dispatch(cartActions.decrementQuantity(item));
    if (item.quantity <= 0) {
      item.quantity = 0;
      setinputValue(item.quantity);
    }
    setinputValue(item.quantity);
  };

  const increaseValue = () => {
    dispatch(cartActions.incrementQuantity(item));
    setinputValue(item.quantity);
  };
  const handleChange = (event) => {
    // console.log(props)
    // setinputValue(event.target.value);
    //   console.log(onChangeQuantity(inputValue))
  };
  return (
    <div className="quantity">
      <div
        className="value-button"
        id="decrease"
        onClick={decreaseValue}
        value="Decrease Value"
      >
        -
      </div>
      <input
        type="number"
        id="number"
        value={inputValue}
        ref={inputRef}
        onChange={handleChange}
      />
      <div
        className="value-button"
        id="increase"
        onClick={increaseValue}
        value="Increase Value"
      >
        +
      </div>
    </div>
  );
}
export default Quantity;
