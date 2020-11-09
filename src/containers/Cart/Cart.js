import './Cart.scss';
import MediaControlCard from '../../components/MediaControlCard/MediaControlCard' 

import React, { Component } from 'react';
import  CreateButton from '../../components/Btn/Btn';
import DeleteIcon from '@material-ui/icons/Delete';
import Quantity from '../../components/quantity/quantity'
class Cart extends Component {
    state = {  }
    render() { 
          const{title,img,onDelete,quantity}=this.props
          
        return (  
            <React.Fragment>
                {console.log(quantity)}
                <MediaControlCard
                className="carte"
                 title={title}
                 img={img}
                 quantityComp={<Quantity quantity={quantity}/>}
                 deleteBtn={ <CreateButton color="secondary" text={ <DeleteIcon />} onClick={onDelete}/>}
                />
            </React.Fragment>
        );
    }
}
 
export default Cart;