import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6443939490738aa7c0737c4b.mockapi.io';

export const fetchTweetCards = createAsyncThunk(
  'cards/fetchAll',
  async (options, thunkAPI) => {
    try {
      const response = await axios.get(
        `/tweets?limit=6&page=${options.page}`,
        options.abortOption
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeFollowers = createAsyncThunk(
  'cards/changeFollowers',
  async (obj, thunkAPI) => {
    try {
      const response = await axios.put(`/tweets/${obj.id}`, obj);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
