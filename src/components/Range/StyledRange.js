import styled from 'styled-components';

const StyledRange = styled.div`
  margin: 2em 0;
  text-align: center;

  .input__label {
    font-size: 1.5rem;
  }

  .range__buttons {
    display: flex;
    justify-content: space-between;
  }

  .step__buttons {
    background: var(--sliderBG);
    border: 0;
    outline: none;
    padding: .5em;
    color: var(--text);
    font-weight: bold;
    cursor: pointer;
    font-family: 'Rubik', sans-serif;
    flex-grow: 1;
    border-radius: 5px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);

    &:hover {
      opacity: .5;
    }
  }

  .input__range {
    outline: none;
    display: block;
    width: 100%;
    appearance: none;
    background: var(--sliderBG);
    height: 10px;
    margin: 1em 0;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }

  .value__button {
    margin:0 1em;
    font-size: 2rem;
  }

  .input__range::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    background: var(--text, white);
    cursor: pointer;
  }

  .input__range::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: var(--text);
    cursor: pointer;
  }
`;

export default StyledRange;
