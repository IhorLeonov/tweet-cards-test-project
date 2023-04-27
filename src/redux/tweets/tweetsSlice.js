import { createSlice } from '@reduxjs/toolkit';
import { fetchTweetCards, changeFollowers } from 'redux/tweets/operations';

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: {
    tweets: [],
    subscriptions: [],
    filteredCards: [],
    isLoading: false,
    isFatching: false,
    error: null,
    page: 1,
  },
  reducers: {
    changeFilter(state, action) {
      state.filteredCards = action.payload;
    },
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
        state.isFatching = true;
      })
      .addCase(changeFollowers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTweetCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isFatching = false;
        state.page += 1;
        state.tweets.push(...action.payload);
      })
      .addCase(changeFollowers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchTweetCards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isFatching = false;
        if (action.payload !== 'canceled') console.log('Error', action.payload);
      })
      .addCase(changeFollowers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log('Error', action.payload);
      }),
});

export const tweetsReducer = tweetsSlice.reducer;
export const { handleSubscribing, changeFilter } = tweetsSlice.actions;
