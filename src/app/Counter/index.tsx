import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countActions, selectCount } from 'store/count';
import styled from 'styled-components';

interface Props {}

export function Counter(props: Props) {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const onIncrement = () => {
    dispatch(countActions.increment());
  };
  const onDecrement = () => {
    dispatch(countActions.decrement());
  };

  return (
    <Div>
      <h1>{count}</h1>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </Div>
  );
}
const Div = styled.div`
  text-align: center;
  button {
    width: 100px;
    height: 100px;
    margin: 0 25px;
  }
`;
