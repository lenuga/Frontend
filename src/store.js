import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers';


const initalState = {};
const middleware = [ thunk ];


let store;

//Only specific configuration for chrome
//internet explore,Safari,firefoxS are not work

if (window.navigator.userAgent.includes("chrome")) {
    store = createStore(rootReducer, initalState,
        compose(applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
} 
else {
    store = createStore(
        rootReducer,
        initalState,
        compose(applyMiddleware(...middleware))
        );
}

export default store;