
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer} from "./contacts/slice";

import { filterReducer } from "./filterbyName/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
   
    
    filter: filterReducer,
  },
});
