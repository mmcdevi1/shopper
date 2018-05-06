import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/Cart/actions';

const { removeItem } = actions;

class CartItem extends React.Component {
  render () {
    const { props } = this;

    return (
      <div className="cart-items">
        { props.products.map(product => {
          if (product.id === props.cartItem) {
            return (
              <div key={product.id} className="cart-item">
                <span>${product.price.toFixed(2)}</span> 
                {product.name}
                <button onClick={() => props.removeItem(props.index, product.price)}>Remove</button>
              </div>
            )
          }
        }) }
      </div>
    )
  }
}

export default connect(null, { removeItem })(CartItem);