import * as React from 'react';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Counter } from '..';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { countActions } from 'store/count';

describe('<Counter  />', () => {
  it('should be in the document', async () => {
    const mockStore = configureStore();
    const store = mockStore();

    const component = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    expect(component.container.firstChild).toBeInTheDocument();

    userEvent.click(await screen.findByText('+'));

    expect(store.getActions()).toEqual([countActions.increment()]);
  });
});
