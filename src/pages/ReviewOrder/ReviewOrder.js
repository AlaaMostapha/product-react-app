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
    this.total=0;
    // this.subtotal=0;
    this.state={
        subtotal:0
    }
}
// static getDerivedStateFromProps(nextProps, prevState) {
//     if (nextProps.key !== prevState.key) {
//         return { 
//             cart: this.props.cart
//         };
//     }
//     return null;
// }
    componentDidMount(){
        console.log(this.total)
         console.log(this.state.cartState)
    }
    componentDidUpdate(prevProps){
        console.log(this.total)
       console.log(`cart state ${this.state.cartState}`)
    }
    calculatTotalUnitPrice=(price,quantity)=>{
        console.log(`price ${price}`)
        console.log(`quantity ${quantity}`)
        const subtotal=price*quantity 
        console.log(`subtotal ${subtotal}`)
        // eslint-disable-next-line use-isnan
        // this.calculatTotalPrice(price*quantity)
        // this.setState({
        //     subtotal:price*quantity 
        // })
        return price*quantity
            
        //     subtotal=price*quantity 
        // console.log(this.subtotal)
        // return  this.subtotal
    }
    calculatTotalPrice(subTotal){
        this.total+=subTotal
        console.log(`total ${this.total}`)
        return this.total
        //update value in constructor with new subtotal
    }

    // changeQuantity=(childData)=>{
    //     // console.log(childData)=
    //     if( childData===undefined)childData=0
    //     this.setState({
    //         quantity:childData
    //     })
    // }
    removeItemFromCart=(productId)=>{
       this.total=0
        this.props.deleteItemInCart(productId)
    }
  componentWillReceiveProps(nextProps) {
      console.log(`nextProps ${nextProps}`)
  this.setState({ cartState: nextProps.cart });  
   console.log(`cart state ${this.state.cartState}`)
}
    createList(){
           const {cart}=this.props

      // console.log(products)
      if(cart) { 
        return (cart|| []).map((product)=>{
         return(
                   <tr key={product.id}>
                        <td key={product.id}> 
                            <div style={{display:"flex",justifyContent:"space-between"}}>
                                <div  style={{display:"flex"}}>
                                    <img src={product.image} alt={product.title} className="reviewPageImg"/>
                                    <h4> {product.title}</h4>
                                </div>
                                <div>
                                   <br/>
                                    <Quantity item={product} fun={this.calculatTotalUnitPrice} key={product.id}/>
                                </div>
                            </div>
                        </td>
                        <td>{product.price}</td>
                        <td >{ this.calculatTotalUnitPrice()}</td>
                        <td> <CreateButton color="secondary" text={ <DeleteIcon />} onClick={()=>this.removeItemFromCart(product.id)}/></td>
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
                                {this.createList()}
                            </tbody>
                        {/* </Grid> */}
                        <tfoot>
                            <tr>
                                <td>Total</td>
                                <td></td>
                                <td>{this.total.toFixed(3)}</td>
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
   deleteItemInCart: (id)=>dispatch(actions.deleteItemInCart(id))
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