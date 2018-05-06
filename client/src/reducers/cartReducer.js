import actions from '../actions/Cart/actions';

const { ADD_ITEM, REMOVE_ITEM } = actions;

const initialState = {
  cart: [],
}

const authReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { 
        ...state,
        cart: [ ...state.cart, action.payload ]
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cart: [ ...state.cart.slice(0, action.payload), ...state.cart.slice(action.payload + 1) ]
      }
    default:
      return state;
  }
}

export default authReducer;