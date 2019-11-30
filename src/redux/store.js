import { createStore, applyMiddleware  } from 'redux';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(ReduxThunk)));

export default store;