/* eslint no-param-reassign: "error" */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from './axiosMock';

const getCarers = createAsyncThunk(
  'carers/getCarers',
  async () => {
    const res = await axios.get('/carers');
    return res.data;
  },
);

const getCarer = createAsyncThunk(
  'carers/getCarer',
  async (carerId) => {
    const res = await axios.get(`/carer/${carerId}`);
    return res.data;
  },
);

const peopleListSlice = createSlice({
  name: 'peopleList',
  initialState: {
    carers: [],
    carer: null,
    error: '',
  },
  reducers: {
  },
  extraReducers: {
    [getCarers.fulfilled]: (state, action) => {
      state.carers = action.payload;
    },
    [getCarers.rejected]: (state) => {
      state.carers = [];
      state.error = 'Failed to load carers';
    },
    [getCarer.fulfilled]: (state, action) => {
      state.carer = action.payload;
    },
    [getCarer.rejected]: (state) => {
      state.carer = null;
      state.error = 'Failed to load carer';
    },
  },
});

const { reducer } = peopleListSlice;
export { getCarers, getCarer };
export default reducer;
