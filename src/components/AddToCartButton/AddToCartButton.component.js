import React, { useContext } from "react";

import { EcommerceContext } from "../Ecommerce";

const AddToCartButton = ({ productId, addToCart }) => {
  const eCommerceContext = useContext(EcommerceContext);

  return (
    <button className="btn" onClick={() => eCommerceContext.addToCart(productId)}>
      Add to Cart
    </button>
  );
};

export default React.memo(AddToCartButton);
