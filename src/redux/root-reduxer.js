import { combineReducers } from "redux";
import { directoryReducer } from "./directory/directory.reducer";
import { itemModalReducer } from "./item-modal/item-modal.reducer";

const rootReducer = combineReducers({
    directory: directoryReducer,
    itemModal: itemModalReducer
})

export default rootReducer;