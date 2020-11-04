import React, { Component } from 'react';
import './productDetails.scss';
import  MediaCard from '../../components/Card/Card';
import  CreateButton from '../../components/Btn/Btn';
import Container from '@material-ui/core/Container';
import {connect} from 'react-redux';
class ProductDetails extends Component {
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
                </div>:""}
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
export default connect(mapStateToProps,null)(ProductDetails); 