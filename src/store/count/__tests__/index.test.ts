import {
  initialState,
  countReducer as reducer,
  countActions as actions,
} from '..';

describe('Reducer, actions and selectors', () => {
  it('should return the initial state on first run', () => {
    const nextState = initialState;

    const result = reducer(undefined, { type: '' });

    expect(result).toEqual(nextState);
  });
});
