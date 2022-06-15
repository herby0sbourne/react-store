import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import directoryReducer from './directory/directoryReducer';
import shopReducer from './shop/shopReducer';
import spinnerReducer from './spinner/spinnerReducer';

const persisConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  spinner: spinnerReducer,
  directory: directoryReducer,
});

export default persistReducer(persisConfig, rootReducer);

// export default combineReducers({
//   user: userReducer,
//   cart: cartReducer,
// });
