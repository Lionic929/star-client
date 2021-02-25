import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import reducer from '../reducers';

export default (initialState = {}) => createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
