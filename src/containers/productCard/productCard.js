import React from "react";
//material ui components
import MediaCard from "../../components/Card/Card";
import Paper from "@material-ui/core/Paper";
import Quantity from "../../components/quantity/quantity";
import CreateButton from "../../components/Btn/Btn";
//history
import history from "../../Route/history";
function ProductCard({ product, addItem }) {
  return (
    <>
      <Paper
        key={product.id}
        onClick={() => history.push(`/products/${product.id}`, product)}
        // mb="2rem"
      >
        <MediaCard
          key={product.id}
          title={product.title}
          discription={product.description}
          img={product.image}
          alt={product.title}
        />
      </Paper>
      <div className="text-center" style={{ margin: "5px" }}>
        {product.quantity > 0 ? (
          <Quantity item={product} />
        ) : (
          <CreateButton
            color="primary"
            text="Add to cart"
            onClick={() => addItem(product)}
          />
        )}
      </div>
    </>
  );
}

export default React.memo(ProductCard);
