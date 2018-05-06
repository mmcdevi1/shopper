import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../components/CartItem';

class Cart extends React.Component {
  renderCartItems () {
    const { cart, products } = this.props

    if (cart.length) {
      return cart.map((cartItem, index) => {
        return (
          <CartItem 
            index={index}
            products={products} 
            key={index} 
            cartItem={cartItem.productId} 
          />
        )
      })
    } else {
      return 'Your cart is empty';
    }
  }

	render () {
		return (
			<div className="cart">
				<h1>Shopping Cart ${this.props.totalPrice.toFixed(2)}</h1>
				{ this.renderCartItems() }
			</div>
		)
	}
}

function mapStateToProps (state) {
	const { cart, totalPrice } = state.Cart;
	const { products } = state.Products;

	return {
		cart,
		products,
    totalPrice,
	}
}

export default connect(mapStateToProps)(Cart);