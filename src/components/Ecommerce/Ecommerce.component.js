import React from "react";

import ProductsList from "../ProductsList";
import Cart from "../Cart";

class Ecommerce extends React.PureComponent {
  state = {
    name:"Ronit",
    products: [
      {
        id: 1001,
        name: "Product 1",
        price: 100.15
      },
      {
        id: 1002,
        name: "Product 2",
        price: 100.15
      },
      {
        id: 1003,
        name: "Product 3",
        price: 103.15
      }
    ],
    cart: {
      a: "Gaurav",
      products: []
    }
  };

  addProductToCart(productId) {
    //Check already product added in cart or not
    let product = this.state.cart.products.find(product => product.id === productId);

    if(!product){
        product = this.state.products.find(product => product.id === productId);

        //Add product in carzt products
        this.setState({cart:{
            ...this.state.cart,
            products:[
                ...this.state.cart.products,
                product
            ]
        }});
    }
  }

  removeProductFromCart(productId) {
    //Check already product added in cart or not
    let product = this.state.cart.products.find(product => product.id === productId);

    if(product){
        //Add product in carzt products
        this.setState({cart:{
            ...this.state.cart,
            products: this.state.cart.products.filter(prod=>prod.id!==productId)
        }});
    }
  }

  render() {
    return (
      <main id="ecommerce">
        <h1>Welcome to {this.props.name}</h1>
        <section>
          <h2>Our Products</h2>
          <ProductsList
            products={this.state.products}
            addToCart={this.addProductToCart.bind(this)}
          />
        </section>

        <section>
            <h2>Cart</h2>
            <Cart products={this.state.cart.products} removeFromCart={this.removeProductFromCart.bind(this)} />
        </section>
      </main>
    );
  }
}

export default Ecommerce;
