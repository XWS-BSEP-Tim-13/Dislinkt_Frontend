import { persistReducer } from "redux-persist";
import loginReducer from "./login";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import notificationReducer from "./notifications";
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['loginReducer','notificationReducer']
}

const allReducers = combineReducers({
    loginReducer,
    notificationReducer
})

export default persistReducer(persistConfig, allReducers);