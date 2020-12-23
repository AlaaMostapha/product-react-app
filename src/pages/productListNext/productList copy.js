import React from "react";

function ProductList() {
  const products = "s";
  const createList = () => {
    if (products) {
      {
        Object.entries(products).map((product, index) => {
          return (
            <li key={index}>
              <Link href="/products/[product.id]" as={"/product/"}>
                <a>{product.title}</a>
                <p>{product.description}</p>
              </Link>
            </li>
          );
        });
      }
    }
  };
  return <div></div>;
}

export default ProductList;
