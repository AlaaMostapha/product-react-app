import MediaControlCard from "../../components/MediaControlCard/MediaControlCard";
import React from "react";
import CreateButton from "../../components/Btn/Btn";
import DeleteIcon from "@material-ui/icons/Delete";
import Quantity from "../../components/quantity/quantity";

function Cart(props) {
  const { title, img, onDelete, item } = props;
  return (
    <React.Fragment>
      <MediaControlCard
        // className="carte"
        title={title}
        img={img}
        quantityComp={<Quantity item={item} />}
        deleteBtn={
          <CreateButton
            color="secondary"
            style={{ minWidth: "40px" }}
            text={<DeleteIcon />}
            onClick={onDelete}
          />
        }
      />
    </React.Fragment>
  );
}

export default Cart;
