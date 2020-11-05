import React, { Component } from 'react';
import './productDetails.scss';
import  CreateButton from '../../components/Btn/Btn';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/actions';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
class ProductDetails extends Component {
   componentDidMount(){  
      const {productId}=this.props.match.params
      console.log(productId);
      this.props.getSingleProduct(productId)
    }
    
    state = {  }
    render() { 
      // const{title,image,alt,description}=this.props.singleProduct;
        return (  
             <div >
              
                {(this.props.singleProduct)?
                <div style={{display:"flex",textAlign:"left"}}>
                  <img src={this.props.singleProduct.image} alt={this.props.singleProduct.alt} style={{height:"250px",margin:"10px"}}/>
                  <div>
                    <h3>{this.props.singleProduct.title}</h3>
                    <p>{this.props.singleProduct.description}</p>
                    <CreateButton color="primary" text="Add to cart" href="#"/>
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
  }
} 
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails); 