import styled from 'styled-components';

const StyledActionButtons = styled.div`
  display: flex;
  margin: 1em 0;
  justify-content: space-between;

  .action__buttons {
    width: 49%;
    background: var(--sliderBG);
    border: 0;
    cursor: pointer;
    padding: 1em;
    font-size: 1rem;
    font-weight: bold;
    color: var(--text);
    outline: none;
    border-radius: 5px;
    font-family: 'Rubik', sans-serif;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);

    &:hover {
      opacity: .5;
    }
  }
`;

export default StyledActionButtons;
