import React from 'react';
import Login from './components/Login';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

function App() {
  return (
    //this wrap means that the store is avialable to all the components indise this context. But still each comopnent needs to subscribe by connect()
    <Provider store={store}>
      <div className="App">
        <Header />
        <Login />
      </div>
    </Provider>
  );
}

export default App;
