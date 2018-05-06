import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/Cart/actions';

const { addToCart } = actions;

class Product extends React.Component {
	render () {
		const { 
			name, 
			price, 
			onClick, 
			product, 
			addToCart 
		} = this.props

		return (
			<div>
				<h2>
					{name} 
					<small>
						${price.toFixed(2)}
					</small>
				</h2>
				<button onClick={() => addToCart({ productId: product.id, userId: 1 })}>Add to Cart</button>
			</div>
		)
	}
}

export default connect(null, { addToCart })(Product);