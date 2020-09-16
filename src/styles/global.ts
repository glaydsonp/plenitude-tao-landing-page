import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    margin: 0 auto;
  }

  body {
    /* background: #fff; */
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.font_primary};
    font-family: ${(props) => props.theme.fonts.openSans};
    overflow-x: hidden;
  }

  button {
    cursor: pointer;
  }
`;
