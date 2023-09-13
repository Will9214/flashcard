import { createSlice } from "@reduxjs/toolkit";
import { getFlashcards } from "./flashcardActions";

export const flashcardSlice = createSlice({
  name: "flashcard",
  initialState: {
    flashcards: [],
  },
  reducers: {},
  extraReducers: async (builder) => {
    builder.addCase(getFlashcards.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getFlashcards.fulfilled, (state, action) => {
      state.flashcards = action.payload.activities;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getFlashcards.rejected, (state, action) => {
      console.log("rejected getFlashcards");
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export default flashcardSlice.reducer;