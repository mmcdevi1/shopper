import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	render () {
		return (
			<header>
				<div>	
					<Link to="/">Home</Link>
					<Link to="/cart">Cart ({this.props.cart.length})</Link>
				</div>
			</header>
		)
	}
}

function mapStateToProps (state) {
	const { cart } = state.Cart;

	return {
		cart,
	}
}

export default connect(mapStateToProps)(Header);