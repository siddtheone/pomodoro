import React from 'react';
import StyledRange from './StyledRange';

export default function Range({
  onChange, onIncrement, onDecrement,
  id, label, value,
  min, max,
  decId, incId, valId,
  disabled,
}) {
  return (
    <StyledRange>
      <label id={id} className="input__label">{label}</label>
      <input
        disabled={disabled}
        className="input__range"
        type="range" min={min} max={max}
        value={value}
        onChange={onChange}
        onInput={onChange} />
      <div className="range__buttons">
        <button className="step__buttons" id={decId} onClick={onDecrement} disabled={disabled}>{'<<'}</button>
        <span className="value__button" id={valId}>{value} mins</span>
        <button className="step__buttons" id={incId} onClick={onIncrement} disabled={disabled}>{'>>'}</button>
      </div>
    </StyledRange>
  )
}
