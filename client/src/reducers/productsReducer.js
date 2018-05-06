import actions from '../actions/Products/actions';

const { FETCH_PRODUCTS } = actions;

const initialState = {
  products: [
    { id: 1, name: 'Video Games', price: 50.00, inStock: 10 },
    { id: 2, name: 'PS4', price: 300.00, inStock: 4 }
  ]
}

const authReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { 
        ...state, 
      };
    default:
      return state;
  }
}

export default authReducer;