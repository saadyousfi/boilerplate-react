import { createSlice, createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

type CountState = number;

const initialState: CountState = 0;

const slice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
  },
});

const { reducer: countReducer, actions: countActions } = slice;

export { initialState, countReducer, countActions };

const selectState = (state: RootState) => state.count;
export const selectCount = createSelector([selectState], state => state);
