import React, {useContext} from 'react';
import globalContext from '../../store';
import Range from './';
import {
  changeAction,
  incrementAction,
  decrementAction,
} from '../../helper';

export function SessionContainer() {
  const [{session, intervalId}, d] = useContext(globalContext);
  const onSessionChange = ({target: {value}}) => d(changeAction({name: 'session', value: +value}));
  const onSessionInc = () => d(incrementAction('session'));
  const onSessionDec = () => d(decrementAction('session'));

  return (
    <Range
      id="session-label"
      label="Session Length"
      decId="session-decrement"
      incId="session-increment"
      valId="session-length"
      value={session}
      disabled={intervalId}
      min={1} max={60}
      onChange={onSessionChange}
      onIncrement={onSessionInc}
      onDecrement={onSessionDec}
    />
  )
}

export function BreakContainer() {
  const [{Break, intervalId}, d] = useContext(globalContext);
  const onBreakChange = ({target: {value}}) => d(changeAction({name: 'Break', value: +value}));
  const onBreakInc = () => d(incrementAction('Break'));
  const onBreakDec = () => d(decrementAction('Break'));

  return (
    <Range
      id="break-label"
      label="Break Length"
      decId="break-decrement"
      incId="break-increment"
      valId="break-length"
      value={Break}
      disabled={intervalId}
      min={1} max={60}
      onChange={onBreakChange}
      onIncrement={onBreakInc}
      onDecrement={onBreakDec}
    />
  )
}
