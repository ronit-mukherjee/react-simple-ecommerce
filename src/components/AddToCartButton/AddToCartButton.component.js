import React from 'react';

const AddToCartButton = ({productId,addToCart})=>(<button className="btn" onClick={()=>addToCart(productId)}>Add to Cart</button>)

export default React.memo(AddToCartButton);