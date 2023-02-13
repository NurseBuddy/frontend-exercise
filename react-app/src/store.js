import { configureStore } from '@reduxjs/toolkit';
import carerReducer from './carerReducer';

export default configureStore({
  reducer: {
    peopleList: carerReducer,
  },
});
