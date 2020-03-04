import React from 'react';
import PropTypes from 'prop-types';

import ProductsList from "../ProductsList";

const Cart = ({products,removeFromCart})=>{
    const getProductsTotal = products => products.reduce((total,product)=>total+product.price,0);

    return(
        <>
            <ProductsList type="cart" products={products} removeFromCart={removeFromCart}/>
            <hr />
            <p>
                Total: {getProductsTotal(products)}
            </p>
            <div>
                <button>Checkout</button>
            </div>
        </>
    )
};


Cart.propTypes = {
    products: PropTypes.array,
    removeFromCart: PropTypes.func
}

export default React.memo(Cart);