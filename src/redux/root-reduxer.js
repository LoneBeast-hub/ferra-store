import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";
import { directoryReducer } from "./directory/directory.reducer";
import { itemModalReducer } from "./item-modal/item-modal.reducer";
import { itemsFilterReducer } from "./items-filter/items-filter.reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

// perist config
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    directory: directoryReducer,
    itemModal: itemModalReducer,
    cart: cartReducer,
    itemsFilter: itemsFilterReducer
})

export default persistReducer(persistConfig, rootReducer);