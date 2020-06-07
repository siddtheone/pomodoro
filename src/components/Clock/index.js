import React from 'react';
import StyledClock from './StyledClock';

export default function Clock({mm, ss, isSession}) {
  React.useEffect(()=> {
    if (mm === 0 && ss === 0) {
      document.getElementById('beep').play();
    }
  });

  return (
    <StyledClock>
      <div id="timer-label" className="timer__label">{isSession ? 'Session' : 'Break'}</div>
      <div id="time-left" className="time__left">{`${('0' + mm).slice(-2)}:${('0' + ss).slice(-2)}`}</div>
      <audio id="beep" preload="auto"
          src="https://goo.gl/65cBl1" />
    </StyledClock>
  );
}
