import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";
import { directoryReducer } from "./directory/directory.reducer";
import { itemModalReducer } from "./item-modal/item-modal.reducer";
import { adminReducer } from "./admin/admin.reducer";
import { userReducer } from './user/user.reducer';
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

// perist config
const persistConfig = {
    key: 'root',
    storage,
    // reducers to persist
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    directory: directoryReducer,
    itemModal: itemModalReducer,
    cart: cartReducer,
    admin: adminReducer,
    user: userReducer
})

export default persistReducer(persistConfig, rootReducer);