import React, { Component } from 'react';
import './productDetails.scss';
import  CreateButton from '../../components/Btn/Btn';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/actions';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import Quantity from '../../components/quantity/quantity';
class ProductDetails extends Component {
  componentDidUpdate(){
    const{cart,singleProduct}=this.props
    //check if this item is in cart return it from cart with it's quantity
    const  product = cart.find(product=>product.id===singleProduct.id)
    if(product){
        console.log('cart has this item')
        this.props.showSingleProduct(product)
    }else{
        this.props.showSingleProduct(singleProduct)
    }
    console.log(singleProduct)
  }
  componentDidMount(){  
    const {productId}=this.props.match.params
    // request item from api
    this.props.getSingleProduct(productId)
  }

  addItem=(singleProduct)=>{
    //add item to cart
    console.log(this.props.addItemInCart(singleProduct))
  }
  render() { 
    const{singleProduct}=this.props;
    return (  
      <div>
        {(singleProduct)?
          <div style={{display:"flex",textAlign:"left"}}>
            <img src={singleProduct.image} alt={singleProduct.alt} style={{height:"250px",margin:"10px"}}/>
            <div>
              <h3>{singleProduct.title}</h3>
              <p>{singleProduct.description}</p>
              <h4>{singleProduct.price}</h4>
              {/* <CreateButton color="primary" text="Add to cart" href="#"/> */}
              {/* {console.log(singleProduct.quantity)} */}
              {(singleProduct.quantity)?<Quantity item={singleProduct}/>:
              <CreateButton color="primary" text="Add to cart"onClick={()=>this.addItem(singleProduct)}/>
              }
            </div>
          </div>
          :<LoadingIndicator/>}
      </div>
    );
  }
}

// export default productDetails;
function mapStateToProps(state){
  console.log(state)
  return{
    singleProduct:state.singleProductReducer.singleProduct,
    cart:state.cartReducer.cart,
  }
}
function mapDispatchToProps(dispatch){
  return{
    getSingleProduct :(id)=>dispatch(actions.getSingleProduct(id)),
    addItemInCart :(item)=>dispatch(actions.addItemInCart(item)),
    showSingleProduct: (item)=>dispatch(actions.showSingleProduct(item))
  }
} 
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails); 