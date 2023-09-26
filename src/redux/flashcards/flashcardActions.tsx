import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";

const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

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

export const addFlashCard = createAsyncThunk(
  "/api/addFlashcard",
  async (data: any) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        `${backendURL}/api/addFlashcard`,
        data,
        config
      );
    } catch (error) {
      return error;
    }
  }
)

export const getRandomFlashcard = createAsyncThunk(
  "/api/getRandomFlashcard",
  async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `${backendURL}/api/getRandomFlashcard`,
        config
      );
      return data;
    } catch (error) {
      return error;
    }
  }
)