import { configureStore } from "@reduxjs/toolkit";
import FlashcardReducer from "./flashcards/flashcardSlice";

const store = configureStore({
  reducer: {
    flashcards: FlashcardReducer,
  },
});

export default store;