import {
  createSlice,
  createEntityAdapter,
  createSelector,
  EntityState,
  PayloadAction,
  Update,
} from '@reduxjs/toolkit';
import { RootState } from 'store';
import { Gallery } from 'types';

type GalleriesState = {
  data: EntityState<Gallery>;
};

const entity = createEntityAdapter<Gallery>();
const initialState: GalleriesState = { data: entity.getInitialState() };

const slice = createSlice({
  name: 'galleries',
  initialState,
  reducers: {
    setAll: (state, action: PayloadAction<Gallery[]>) => {
      entity.setAll(state.data, action.payload);
    },
    addOne: (state, action: PayloadAction<Gallery>) => {
      entity.addOne(state.data, action.payload);
    },
    updateOne: (state, action: PayloadAction<Update<Gallery>>) => {
      entity.updateOne(state.data, action.payload);
    },
    removeOne: (state, action: PayloadAction<string>) => {
      entity.removeOne(state.data, action.payload);
    },
  },
});

const { actions: galleriesActions, reducer: galleriesReducer } = slice;

export { initialState, galleriesActions, galleriesReducer };

const selectState = (state: RootState) => state.galleries;
const selectData = createSelector([selectState], state => state.data);
const selectAllGalleries = createSelector([selectData], state =>
  entity.getSelectors().selectAll(state)
);
const selectGalleryById = createSelector(
  [selectData, (state: RootState, id: string) => id],
  (state, id) => entity.getSelectors().selectById(state, id)
);
export { selectAllGalleries, selectGalleryById };
