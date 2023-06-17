
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer} from "./contacts/slice";
import { filterReducer } from "./filterbyName/slice";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const persistConfig ={
  key:'contactsRoot',
  storage,
  whitelist: ['contactsState']
}
const rootReducer = combineReducers({
  contactsState: contactsReducer
})
const persistedReducer= persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReducer,
    middleware: [thunk]
  },
});
