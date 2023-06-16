import { createSlice, nanoid } from "@reduxjs/toolkit";


const contactsInitialState = [
  { id: 0, contactname: "Rosie Simpson", phoneNum: "3106978888",  },
  { id: 1, contactname: "Hermione Kline", phoneNum: "3116971597",  },
  { id: 2, contactname: "Eden Clements", phoneNum: "3236975900", },
  { id: 3, contactname: "Annie Copeland", phoneNum: "3776975894", },
  { id: 4, contactname: "Wendel Cunnigham", phoneNum: "3016971234",  },
];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    createContact(state, { payload }) {
      if(state.find(name =>name.contactname===payload.contactname)){
        alert("We already have the contact on our contact list")
      }else{
        state.push({ id: nanoid(), contactname: payload.contactname, phoneNum: payload.phoneNum });
      }
        
      
      
     
    },
    /* toggleTask(state, { payload }) {
      for (let contact of state) {
        if (contact.id === payload) {
          contact.completed = !contact.completed;
        }
      }
    }, */
    deleteTask(state, { payload }) {
      const idx = state.findIndex((contact) => contact.id === payload);
      state.splice(idx, 1);
    },
  },
});

export const { createContact, deleteTask } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;


