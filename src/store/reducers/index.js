import { persistReducer } from "redux-persist";
import loginReducer from "./login";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['loginReducer']
}

const allReducers = combineReducers({
    loginReducer,
})

export default persistReducer(persistConfig, allReducers);