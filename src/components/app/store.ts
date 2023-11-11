import { configureStore } from "@reduxjs/toolkit";
import campaignReducer from "../featurs/campaignSlice";

export const store = configureStore({
  reducer: { campaignReducer },
});
