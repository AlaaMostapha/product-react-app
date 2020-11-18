import React, { Component } from 'react';
import './productList.scss'
//material ui components
import  MediaCard from '../../components/Card/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
//custom components
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import Quantity from '../../components/quantity/quantity';
import CreateButton from '../../components/Btn/Btn'; 
//store
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/actions';
//history
import history from '../../Route/history';
class ProductList extends Component {
  
  componentDidMount(){  
    //when component mount get all products
    this.props.getProducts(); 
    console.log(history)
  }
  componentDidUpdate(){
    //if there are items in cart 
    if(this.props.cart){ 
      //get there indexes in product list
      let indexesOfCartItems= this.props.cart.map(cartItem=>{
        return(
          this.props.products.findIndex(itemx=>itemx.id ===cartItem.id)
        )
      })
      //replace them with items in product list
      //to get them updated with last quantity applied in cart at the same time
      for(let i=0;i<indexesOfCartItems.length;i++){
        this.props.products.splice(indexesOfCartItems[i],1,this.props.cart[i])
      }
       console.log(indexesOfCartItems)
    }
  }
  // check=(id)=>{
  //  //func to send clicked product to product details using id on click
  //   return   this.props.history.push(`/products/${id}`);  
  // }
  addItem=(item)=>{
    //add clicked product to cart
    const{cart,products,showProducts,addItemInCart}=this.props;
    addItemInCart(item);
    //check if this item is in cart & has quantity return it and update products
    const  checkProduct = cart.find(product=>product.id===item.id) //check if it was in cart
    console.log(checkProduct)
    if(checkProduct){
      const itemIndexInProducts=products.findIndex(itemx=> itemx.id ===item.id);
      console.log(itemIndexInProducts) //get it's index from products
      products[itemIndexInProducts]=checkProduct; //replace it with old one
      if(itemIndexInProducts!==-1){
        showProducts(products) //update
      }
    }
  }
  createList=()=>{   
    const {products}=this.props
    console.log(products)
    if(products) { 
      return (products || []).map((product,index)=>{
        return(
          <Grid item xs={3} key={product.id} className="grid-custom" >
          <Paper key={product.id} onClick={()=>history.push(`/products/${product.id}`,product)} mb="2rem">
            <MediaCard key={product.id} title={product.title} 
            discription={product.description} 
            img={product.image}
            alt={product.title}
            />
          </Paper>
            <div className="text-center" style={{margin:"5px"}}>
              {(product.quantity>0)?<Quantity item={product}/>:
                <CreateButton color="primary" text="Add to cart" onClick={()=>this.addItem(product)}/>
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
   showProducts:(products)=>dispatch(actions.showProducts(products))
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