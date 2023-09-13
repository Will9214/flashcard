import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store";
import { addFlashCard, getFlashcards } from "./flashcardActions"

// Define type for the slice state
interface FlashcardState {
  flashcards: [],
  loading: boolean,
  error: any,
}

// Define initial state with the type above
const initialState: FlashcardState = {
  flashcards: [],
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
    })
  },
});

export default flashcardSlice.reducer;