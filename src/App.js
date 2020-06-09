import React from 'react';
import {Provider} from 'react-redux';
import store from './store/index';
import './index.css';
import Viruleta from "./components/Viruleta/Viruleta";

function App() {
  return (
      <Provider store={store}>
        <Viruleta/>
      </Provider>
  );
}

export default App;
