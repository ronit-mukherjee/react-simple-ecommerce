import React,{useContext} from "react";
import PropTypes from "prop-types";

import AddToCartButton from "../AddToCartButton";

import {EcommerceContext} from "../Ecommerce";

const Product = ({
  details: { id, name, price },
  type
}) => {
  const eCommerceContext = useContext(EcommerceContext);

  return (
    <div>
      <p>
        <b>Name:</b> {name}
      </p>
      <p>
        <b>Price:</b> {price}
      </p>
      <div>
        {type !== "cart" && (
          <AddToCartButton productId={id} />
        )}
        {type === "cart" && (
          <button onClick={() => eCommerceContext.removeFromCart(id)}>Remove from Cart</button>
        )}
      </div>
    </div>
  );
};

Product.propTypes = {
  // An object taking on a particular shape
  details: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number
  })
};

export default React.memo(Product);
