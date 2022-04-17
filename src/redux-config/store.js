import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import services from "../entities/API";
import reducers from "./reducers";

const withArgument = thunk.withExtraArgument({ services });
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeAlt(applyMiddleware(withArgument));
const store = createStore(reducers, enhancer);

export default store;
