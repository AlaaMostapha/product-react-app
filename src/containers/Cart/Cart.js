import './Cart.scss';
import MediaControlCard from '../../components/MediaControlCard/MediaControlCard' 

import React, { Component } from 'react';
import  CreateButton from '../../components/Btn/Btn';
import DeleteIcon from '@material-ui/icons/Delete';
import Quantity from '../../components/quantity/quantity'
class Cart extends Component {
    state = {  }
    render() { 
          const{title,img}=this.props
        return (  
            <React.Fragment>
                {console.log("ReviewOrder")}
                <MediaControlCard
                 title={title}
                 img={img}
                 quantity={<Quantity/>}
                 deleteBtn={ <CreateButton color="secondary" text={ <DeleteIcon />} href="#"/>}
                />
               
            </React.Fragment>
        );
    }
}
 
export default Cart;