import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {cartReducers} from './reducers/cartReducers';
import {getProductDetailsReducer, getProductReducer} from "./reducers/productReducers";
import {getManProdReducer} from "./reducers/mansProductActions";

const reducer=combineReducers({
    cart:cartReducers,
    getProducts:getProductReducer,
    getProductDetails:getProductDetailsReducer,
    getMansProducts:getManProdReducer
})
const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

const INITIAL_STATE = {
    cart: {
        cartItems: cartItemsInLocalStorage,
    },
};

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;