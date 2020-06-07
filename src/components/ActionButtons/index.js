import React, {useContext} from 'react';
import StyledActionButtons from './StyledActionButtons';
import {
  resetAction,
  changeAction,
} from '../../helper';
import globalContext from '../../store';

export default function ActionButtons() {
  const [{intervalId, isPaused}, d] = useContext(globalContext);

  const onReset = () => {
    clearInterval(intervalId);
    d(resetAction());
    const audio = document.getElementById('beep');
    audio.pause();
    audio.currentTime = 0;
  };

  const onPlayPause = () => {
    if (!intervalId) {
      d(changeAction({
        name: 'intervalId',
        value: setInterval(()=>  d({action: 'lapse'}), 1000)
      }));
    } else {
      d(changeAction({name: 'isPaused', value: !isPaused}));
    }
  }
  return (
    <StyledActionButtons>
      <button className="action__buttons" id="start_stop" onClick={onPlayPause}>Play / Pause</button>
      <button className="action__buttons" id="reset" onClick={onReset}>Reset</button>
    </StyledActionButtons>
  )
}
