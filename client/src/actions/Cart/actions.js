const actions = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',

  addToCart: function (data) {
    return (dispatch) => {

      dispatch({
        type: actions.ADD_ITEM,
        payload: data
      })

    }
  },

  removeItem: function () {
  	return dispatch => {

  	}
  }
}

export default actions;

