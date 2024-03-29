import React from 'react';
import ContainerLogin from './components/containerLogin/containerLogin';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './redux/store';
import Search from './components/Search';
import Taskslist from './components/TasksList';
import './App.css';

function App() {
  return (
    //this wrap means that the store is avialable to all the components indise this context. But still each comopnent needs to subscribe by connect()
    <Provider store={store}>
      <div className="App">
      <h1>Hello</h1>
        <Header />
        <ContainerLogin />
        <Search />
        <Taskslist />
      </div>
    </Provider>
  );
}

export default App;
