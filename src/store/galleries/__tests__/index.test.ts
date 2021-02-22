import {
  initialState,
  galleriesReducer as reducer,
  galleriesActions as actions,
} from '..';

describe('Reducer, actions and selectors', () => {
  it('should return the initial state on first run', () => {
    // Arrange
    const nextState = initialState;

    // Act
    const result = reducer(undefined, { type: '' });

    // Assert
    expect(result).toEqual(nextState);
  });
});
