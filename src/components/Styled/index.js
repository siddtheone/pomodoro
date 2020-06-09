import styled, {createGlobalStyle} from 'styled-components';

export const Global = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  :root {
    --bg: #726a95;
    --text: white;
    --sliderBG: #a0c1b8;
  }
  body {
    font-family: 'Rubik', sans-serif;
    background: var(--bg);
    color: var(--text);
    font-size: 16px;
  }
  .App {
    width: min(100%, 640px);
    margin: 0 auto;
    padding: .5em;
  }
`;

export const Header = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin: .2em 0;
`;
