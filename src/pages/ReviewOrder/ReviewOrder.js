import './ReviewOrder.scss';
// import Cart from '../../containers/Cart/Cart';
// import  MediaControlCard from '../../components/MediaControlCard/MediaControlCard';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/actions';
import  MediaCard from '../../components/Card/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import DeleteIcon from '@material-ui/icons/Delete';
import Quantity from '../../components/quantity/quantity'
import  CreateButton from '../../components/Btn/Btn';
import OrderNow from '../UserFormOrderNow/OrderNow';
class ReviewOrder extends Component {
//each product display with quantity and delete btn //rest unit price and total price
    componentDidMount(){
        // this.props.getItemsFromCart()
        console.log(this.props.newItem)
        console.log("rrrrr")
    }
    calculatTotalPrice(price,quantity){
        return price*quantity
    }
    createList(){
           const {cart}=this.props

      // console.log(products)
      if(cart) { 
        return (cart || []).map((product)=>{
         return(
            <tr>
                <Grid item xs={3} key={product.id} className="grid-custom">
                    <td>
                        <Paper>
                            <MediaCard title={product.title} 
                                discription={product.description} 
                                img={product.image}
                                alt={product.title}
                                quantity={<Quantity/>}
                                deleteBtn={ <CreateButton color="secondary" text={ <DeleteIcon />} href="#"/>}
                            />
                        </Paper>
                    </td>
                    <td>{product.price}</td>
                     {/* get value from quantity component from usestate and send it to func */}
                    <td>{()=>this.calculatTotalPrice(product.price,"quantity")}</td>
                </Grid>
            </tr>
         )
       })
      }
    }
    redirectToUserForm=()=>{
        return this.props.history.push(`/OrderNow`); 
    }
    state = {  }
    render() { 
        const{cartLoader}=this.props
        return (  
             <Container maxWidth="lg" className="ProductListContainer">
                {(cartLoader) ?  <LoadingIndicator/>:
                    <table>
                         <tr>
                            <th>item</th>
                            <th>unit price</th>
                            <th>total price</th>
                        </tr>
                        <Grid container spacing={2} > 
                            {this.createList()}
                        </Grid>
                   </table>
                }
                <CreateButton color="primary" text="Order Now"  onClick={this.redirectToUserForm}/>
            </Container>
        );
    }
}
 
function mapDispatchToProps(dispatch){
  return{
   getItemsFromCart: ()=>dispatch(actions.getItemsFromCart())
  }
} 
function mapStateToProps(state){
  console.log(state)
  //  console.log(state.productsReducer)
  return{
    cart:state.cartReducer.cart,
    cartLoader:state.cartReducer.cartLoader,
    newItem:state.cartReducer.newItem ,//obj
    // quantity:state.cartReducer.newItemData.quantity 
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReviewOrder); 


// first quantity come from store to display in review OrderNow
// after that it change in page 