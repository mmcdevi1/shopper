import actions from '../actions/Cart/actions';

const { ADD_ITEM, REMOVE_ITEM } = actions;

const initialState = {
  cart: [],
  totalPrice: 0,
}

const authReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { 
        ...state,
        cart: [ ...state.cart, action.payload ],
        totalPrice: state.totalPrice + action.payload.productPrice
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cart: [ 
          ...state.cart.slice(0, action.index), 
          ...state.cart.slice(action.index + 1) 
        ],
        totalPrice: state.totalPrice - action.price
      }
    default:
      return state;
  }
}

export default authReducer;