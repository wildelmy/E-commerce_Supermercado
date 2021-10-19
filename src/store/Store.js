import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { LoginReducers } from '../reducers/LoginReducers'
import { shoppingReducers } from "../reducers/shoppingReducers";

const composeEnhancers = (typeof window !== 'undefined' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducer = combineReducers({
	login: LoginReducers,
	shopping: shoppingReducers
})

export const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk))
)