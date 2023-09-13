import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";

export const getFlashcards = createAsyncThunk(
  "/api/getFlashcards",
  async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `${backendURL}/api/getFlashcards`,
        config
      );

      return data;
    } catch (error) {
      return error;
    }
  }
);