import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  html, body, #root {
    min-height: 100%;
    height: 100%;
  }

  body {
    background: #0B0A0D;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #DCDCDF;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

`;
