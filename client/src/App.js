import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PublicRoutes from './router';
import store from './reducers/store';

import Products from './containers/Products';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <PublicRoutes />
        </Provider>
      </div>
    );
  }
}

export default App;