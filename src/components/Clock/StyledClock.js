import styled from 'styled-components';

const StyledClock = styled.div`
  border: 10px solid var(--sliderBG);
  text-align: center;
  border-radius: 30px 100px;

  .timer__label {
    font-size: 2rem;
  }

  .time__left {
    font-family: 'Nova Mono', cursive;
    font-size: 5rem;
  }
`;

export default StyledClock;
