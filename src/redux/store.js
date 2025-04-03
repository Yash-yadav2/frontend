// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import transactionReducer from "./transactionSlice";
import companyAccountReducer from "./companyAccountSlice";


const store = configureStore({
  reducer: {
    auth: authReducer,
    companyAccounts: companyAccountReducer,
    transaction: transactionReducer,

  },
});

export default store;
