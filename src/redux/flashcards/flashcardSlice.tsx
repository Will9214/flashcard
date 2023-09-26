import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store";
import { addFlashCard, getFlashcards, getRandomFlashcard } from "./flashcardActions"

// Define type for the slice state
interface FlashcardState {
  flashcards: [],
  randomFlashcard: {},
  loading: boolean,
  error: any,
}

// Define initial state with the type above
const initialState: FlashcardState = {
  flashcards: [],
  randomFlashcard: {},
  loading: false,
  error: null,
}

export const flashcardSlice = createSlice({
  name: "flashcard",
  initialState,
  reducers: {},
  extraReducers: async (builder) => {
    builder.addCase(getFlashcards.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getFlashcards.fulfilled, (state, action) => {
      state.flashcards = action.payload.flashcards;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getFlashcards.rejected, (state, action) => {
      console.log("rejected getFlashcards");
      state.loading = false;
      state.error = action.error.message || null;
    });
    builder.addCase(addFlashCard.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addFlashCard.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(addFlashCard.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
    builder.addCase(getRandomFlashcard.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRandomFlashcard.fulfilled, (state, action) => {
      state.randomFlashcard = action.payload.randomFlashcard[0];
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getRandomFlashcard.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export default flashcardSlice.reducer;