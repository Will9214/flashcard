import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import FlashcardReducer from "./flashcards/flashcardSlice"

const store = configureStore({
  reducer: {
    flashcardReducer: FlashcardReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store