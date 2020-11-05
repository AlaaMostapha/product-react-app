import React, { Component } from 'react';
import './productList.scss'
import  MediaCard from '../../components/Card/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/actions';
class ProductList extends Component {
 check=(id)=>{
    return   this.props.history.push(`products/${id}`);  
  }
  componentDidMount(){  
    this.props.getProducts(); 
    console.log(this.props.products);
  }
    
   createList(){   
      const {products}=this.props
      // console.log(products)
      if(products) { 
        return (products || []).map((product)=>{
         return(
           <Grid item xs={3} key={product.id} className="grid-custom" onClick={()=>this.check(product.id)}>
             <Paper>
                   <MediaCard title={product.title} 
                   discription={product.description} 
                   img={product.image}
                   alt={product.title}
                   />
            </Paper>
            </Grid>
         )
       })
      }
      
  }

    state = {  }
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
   getSingleProduct :(id)=>dispatch(actions.getSingleProduct(id)),
  }
} 
function mapStateToProps(state){
  // console.log(state)
  //  console.log(state.productsReducer)
  return{
    products:state.productsReducer.products,
    loading:state.productsReducer.loader,
    singleProduct:state.singleProductReducer.singleProduct,
    singleProductloader:state.singleProductReducer.singleProductloader,
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductList); 
// export default ProductList;