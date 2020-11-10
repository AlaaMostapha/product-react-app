import React, { Component } from 'react';
import './productList.scss'
import  MediaCard from '../../components/Card/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/actions';
import Quantity from '../../components/quantity/quantity';
import  CreateButton from '../../components/Btn/Btn';
class ProductList extends Component {

 check=(id)=>{
   //func to send clicked product to product details using id
  //  console.log('click')
    return   this.props.history.push(`products/${id}`);  
  }

  componentDidMount(){  
    //when component mount get all products
    this.props.getProducts(); 
  }
  addItem=(item,id)=>{
    //func to add clicked product to cart
   console.log( this.props.addItemInCart(item))
  }
  createList=()=>{   
      const {products}=this.props
      // console.log(products)
      if(products) { 
        return (products || []).map((product,index)=>{
         return(
           <Grid item xs={3} key={product.id} className="grid-custom" >
             <Paper key={product.id} onClick={()=>this.check(product.id)} mb="2rem">
                   <MediaCard key={product.id} title={product.title} 
                   discription={product.description} 
                   img={product.image}
                   alt={product.title}
                   />
            </Paper>
             <div className="text-center" style={{margin:"5px"}}>
                {(product.quantity>0)?<Quantity item={product}/>:
                 <CreateButton color="primary" text="Add to cart" onClick={()=>this.addItem(product,product.id)}/>
                //  <button onClick={(e)=>this.addItem(product,product.id)} style={{margin:"5px"}}>Add to cart</button>
                 }
             </div>
            </Grid>
         )
       })
      }
      
  }


    render() { 
        const{loading}=this.props
        return (  
           <Container maxWidth="lg" className="ProductListContainer">
                 {(loading) ?  <LoadingIndicator/>:
                 <Grid container spacing={2} > 
                 {this.createList()}
                   </Grid>
                   }

            </Container>
        );
    }
}

function mapDispatchToProps(dispatch){
  return{
   getProducts : ()=>dispatch(actions.getProducts()),
   addItemInCart :(item)=>dispatch(actions.addItemInCart(item)),
  //  getItemsFromCart: ()=>dispatch(actions.getItemsFromCart())
  }
} 
function mapStateToProps(state){
  // console.log(state)
  return{
    products:state.productsReducer.products,
    loading:state.productsReducer.loader,
    cartLoader:state.cartReducer.cartLoader,
    cart:state.cartReducer.cart,
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductList); 
// export default ProductList;