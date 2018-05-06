import React from 'react';
import { connect } from 'react-redux';

class Cart extends React.Component {
	fetchProduct (cartItem) {
		const { products } = this.props;

		return products.map(product => {
			if (product.id === cartItem) {
				return product.name
			}
		})
	}

	render () {
		const { cart, products } = this.props

		return (
			<div className="cart">
				<h1>Shopping Cart</h1>
				{cart.map((cartItem, index) => {
					return (
						<div key={index}>
							{ this.fetchProduct(cartItem.productId) }
						</div>
					)
				})}
			</div>
		)
	}
}

function mapStateToProps (state) {
	const { cart } = state.Cart;
	const { products } = state.Products;

	return {
		cart,
		products,
	}
}

export default connect(mapStateToProps)(Cart);