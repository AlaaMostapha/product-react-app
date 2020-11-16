import './ReviewOrder.scss';
// import Cart from '../../containers/Cart/Cart';
// import  MediaControlCard from '../../components/MediaControlCard/MediaControlCard';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Container from '@material-ui/core/Container';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import DeleteIcon from '@material-ui/icons/Delete';
import Quantity from '../../components/quantity/quantity'
import  CreateButton from '../../components/Btn/Btn';
import * as actions from '../../redux/actions/actions';
class ReviewOrder extends Component {
//each product display with quantity and delete btn //rest unit price and total price
constructor(props){
    super(props);
    this.carttotal=0;

}
    componentDidMount(){
        // this.calculatTotalPrice()
        // console.log(this.cartTotal)
    }
    
    // calculatTotalUnitPrice=(item)=>{
    //     this.calculatTotalPrice()
    //     if(item){
    //         const price = item.price;
    //         const quantity= item.quantity
    //         console.log(price*quantity)
    //         return price*quantity
    //     }
        
    // }
    //seprated func to calculate total from cart in props
    calculatTotalPrice(){
        console.log(this.props.cart)
      const cartTotal=this.props.cart.reduce(function(accumlator,product){
            return accumlator + product.price*product.quantity
        },0).toFixed(3);
       console.log(cartTotal);
       return cartTotal;
    }
    removeItemFromCart=(product)=>{
       this.total=0
        this.props.deleteItemInCart(product)
    }
   
// static getDerivedStateFromProps(props, state) {
//     console.log(state);
//     console.log(props)
//         return {
//             cart:props.cart
//         }
    
//   }
    createList(){
           const {cart}=this.props

      // console.log(products)
      if(cart) { 
        return (cart).map((product)=>{
         return(
                   <tr key={product.id}>
                        <td > 
                            <div style={{display:"flex",justifyContent:"space-between"}}>
                                <div  style={{display:"flex"}}>
                                    <img src={product.image} alt={product.title} className="reviewPageImg"/>
                                    <h4> {product.title}</h4>
                                </div>
                                <div>
                                   <br/>
                                    <Quantity item={product}  key={product.id}/>
                                </div>
                            </div>
                        </td>
                        <td>{product.price}</td>
                        <td >{(product.price*product.quantity).toFixed(3)}</td>
                        <td> <CreateButton color="secondary" text={ <DeleteIcon />} onClick={()=>this.removeItemFromCart(product)}/></td>
                   </tr>    
         )
       })
      }else{
        return <div>No items</div>
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
                 <h2 className="text-center">Review Your Order</h2>
                {(cartLoader) ?  <LoadingIndicator/>:
                    <table>
                         <thead>
                            <tr>
                                <th>item</th>
                                <th>unit price</th>
                                <th>total price</th>
                                <th>Delete</th>
                            </tr>
                         </thead>

                        {/* <Grid container spacing={2} >  */}
                            <tbody>
                                {console.log(this.createList())}
                                {this.createList()}
                            </tbody>
                        {/* </Grid> */}
                        <tfoot>
                            <tr>
                                <td>Total</td>
                                <td></td>
                                <td>{}{this.calculatTotalPrice()}</td>
                                <td></td>
                            </tr>
                        </tfoot>
                   </table>
                }
               <div style={{textAlign:"center"}}>
                    <CreateButton color="primary" text="Order Now"  onClick={this.redirectToUserForm}/>
               </div>
            </Container>
        );
    }
}
 
function mapDispatchToProps(dispatch){
  return{
   deleteItemInCart: (product)=>dispatch(actions.deleteItemInCart(product))
  }
} 
function mapStateToProps(state){
  console.log(state)
  //  console.log(state.productsReducer)
  return{
    cart:state.cartReducer.cart,
    cartLoader:state.cartReducer.cartLoader,
    quantityValue:state.cartReducer.quantityValue
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReviewOrder); 


// first quantity come from store to display in review OrderNow
// after that it change in page 