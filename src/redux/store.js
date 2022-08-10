import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// reducers //
import { userReducer } from "./reducer";

const reducer = combineReducers({
  user:userReducer 

});

const initialState = {
  user: null,
};

const middleware = [thunk];

export  const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);


