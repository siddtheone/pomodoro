import React, {useEffect} from 'react';
import {
  Global,
  Header
} from './components/Styled';
import {SessionContainer, BreakContainer} from './components/Range/RangeContainer';
import Clock from './components/Clock';
import ActionButtons from './components/ActionButtons';
import {Provider} from './store'
import reducer, {initialState} from './reducer';
import {changeAction} from './helper';

function App() {
  const gc = React.useReducer(reducer, initialState);
  const [{mm, ss, session, isSession, intervalId}, d] = gc;

  useEffect(()=> {

  });

  return (
    <Provider value={gc}>
      <div className="App">
        <Global />
        <Header>Pomodoro Clock</Header>
        <BreakContainer/>
        <SessionContainer/>
        <Clock mm={mm} ss={ss} isSession={isSession} showOnTitle={intervalId} />
        <ActionButtons/>
      </div>
    </Provider>
  );
}

export default App;
