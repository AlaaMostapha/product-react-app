import MediaControlCard from "../../components/MediaControlCard/MediaControlCard";
import React, { Component } from "react";
import CreateButton from "../../components/Btn/Btn";
import DeleteIcon from "@material-ui/icons/Delete";
import Quantity from "../../components/quantity/quantity";

class Cart extends Component {
  state = {};
  render() {
    const { title, img, onDelete, item } = this.props;

    return (
      <React.Fragment>
        <MediaControlCard
          className="carte"
          title={title}
          img={img}
          quantityComp={<Quantity item={item} />}
          deleteBtn={
            <CreateButton
              color="secondary"
              text={<DeleteIcon />}
              onClick={onDelete}
            />
          }
        />
      </React.Fragment>
    );
  }
}

export default Cart;
