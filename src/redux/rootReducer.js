import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import logger from 'redux-logger';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';

const middleware = [logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function store() {
  const store = createStore(
    combineReducers({
      user: userReducer,
      cart: cartReducer,
    }),
    composeEnhancers(applyMiddleware(...middleware))
  );

  return store;
}
