import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainDesign from './components/designlayout/maindesign'
import store from "./store";
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Provider store={store}>
        <MainDesign/>
      </Provider>
      </React.Fragment> 
    );
  }
}
 
export default App;
