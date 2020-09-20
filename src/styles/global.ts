import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    /* background: #fff; */
    color: ${(props) => props.theme.colors.font_primary};
    font-family: ${(props) => props.theme.fonts.openSans};
    overflow-x: hidden;
  }

  button {
    cursor: pointer;
  }

  #__next {
    overflow: hidden;
  }
`;
