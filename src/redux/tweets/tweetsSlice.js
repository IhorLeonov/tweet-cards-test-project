import { createSlice } from '@reduxjs/toolkit';
import { fetchTweetCards, changeFollowers } from 'redux/tweets/operations';

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: {
    cards: [],
    isLoading: false,
    error: null,
    subscriptions: [],
  },
  reducers: {
    handleSubscribing: (state, action) => {
      if (state.subscriptions.includes(action.payload)) {
        state.subscriptions = state.subscriptions.filter(
          id => id !== action.payload
        );
        return;
      }
      state.subscriptions.push(action.payload);
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTweetCards.pending, state => {
        state.isLoading = true;
      })
      .addCase(changeFollowers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTweetCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cards = action.payload;
      })
      .addCase(changeFollowers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchTweetCards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(action.payload);
      })
      .addCase(changeFollowers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(action.payload);
      }),
});

export const tweetsReducer = tweetsSlice.reducer;
export const { handleSubscribing } = tweetsSlice.actions;
