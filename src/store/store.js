/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import selectTrackReducer from './sliceSelectTrack';
import userNameReduser from './sliceUserName';

export default configureStore({
  reducer: {
    selectTrack: selectTrackReducer,
    userName: userNameReduser,
  },
});
