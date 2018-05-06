import React from 'react';
import { connect } from 'react-redux';
import Product from '../components/Product';

class Products extends React.Component {
	render () {
		const { products } = this.props;

		return (
			<div>
				{products.map(product => {
					return (
						<Product 
							product={product}
							key={product.id}
							name={product.name} 
							price={product.price} 
							inStock={product.inStock}
							onClick={this.props.onClick}
						/>
					)
				})}
			</div>
		)
	}
}

function mapStateToProps (state) {
	const { products } = state.Products;

	return {
		products,
	}
}

export default connect(mapStateToProps, null)(Products)