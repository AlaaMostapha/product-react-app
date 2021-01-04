import React from "react";

function Show({ items = [] }) {
  if (items.length <= 0) {
    return <div></div>;
  } else {
    return (
      <div>
        {items.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    );
  }
}

export default Show;
