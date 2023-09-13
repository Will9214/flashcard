import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store";
import { getFlashcards } from "./flashcardActions"

// Define type for the slice state
interface FlashcardState {
  flashcards: [],
}

// Define initial state with the type above
const initialState: FlashcardState = {
  flashcards: [],
}

export const flashcardSlice = createSlice({
  name: "flashcard",
  initialState,
  reducers: {},
  extraReducers: async (builder) => {
    builder.addCase(getFlashcards.pending, (state) => {
      // state.loading = true;
    });
    builder.addCase(getFlashcards.fulfilled, (state, action) => {
      debugger;
      state.flashcards = action.payload.flashcards;
      // state.loading = false;
      // state.error = null;
    });
    builder.addCase(getFlashcards.rejected, (state, action) => {
      console.log("rejected getFlashcards");
      // state.loading = false;
      // state.error = action.error.message || null;
    });
  },
});

export default flashcardSlice.reducer;