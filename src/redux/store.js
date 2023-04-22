import { configureStore } from '@reduxjs/toolkit';
import { tweetsReducer } from 'redux/tweets/tweetsSlice';

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
  },
});
