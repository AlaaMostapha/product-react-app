import React, { Component } from 'react';
import './productDetails.scss';
import  CreateButton from '../../components/Btn/Btn';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/actions';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import Quantity from '../../components/quantity/quantity';
class ProductDetails extends Component {
  state={
    clicked:false
  }
  componentDidUpdate(){
     console.log(this.props.singleProduct.quantity)
  }
   componentDidMount(){  
      const {productId}=this.props.match.params
      console.log(productId);
      this.props.getSingleProduct(productId)
      // console.log(this.props.singleProduct.quantity)
    }
    addItem=(singleProduct)=>{
      console.log(this.props.addItemInCart(singleProduct))
      this.setState({
        clicked:true
      })
    }
    state = {  }
    render() { 
       const{singleProduct}=this.props;
        return (  
             <div >
              
                {(singleProduct)?
                <div style={{display:"flex",textAlign:"left"}}>
                  <img src={singleProduct.image} alt={singleProduct.alt} style={{height:"250px",margin:"10px"}}/>
                  <div>
                    <h3>{singleProduct.title}</h3>
                    <p>{singleProduct.description}</p>
                    <h4>{singleProduct.price}</h4>
                    {/* <CreateButton color="primary" text="Add to cart" href="#"/> */}
                    {console.log(singleProduct.quantity)}
                    {(this.state.clicked)?<Quantity item={singleProduct}/>:
                      // <button onClick={()=>this.addItem(singleProduct)}>Add to cart</button>
                     <CreateButton color="primary" text="Add to cart"onClick={()=>this.addItem(singleProduct)}/>
                     }
                  </div>
                </div>:<LoadingIndicator/>}
            </div>
        );
    }
}

// export default productDetails;
function mapStateToProps(state){
  console.log(state)
   console.log(state.singleProductReducer)
  return{
    singleProduct:state.singleProductReducer.singleProduct,
  }
}
function mapDispatchToProps(dispatch){
  return{
   getProducts : ()=>dispatch(actions.getProducts()),
   getSingleProduct :(id)=>dispatch(actions.getSingleProduct(id)),
    addItemInCart :(item)=>dispatch(actions.addItemInCart(item)),
  }
} 
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails); 