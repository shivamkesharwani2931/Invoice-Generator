import { configureStore } from "@reduxjs/toolkit";

import UserReducer from "./User/User";

export const invoiceflow_Store = configureStore({
  reducer: {
    user: UserReducer,
  },
});
