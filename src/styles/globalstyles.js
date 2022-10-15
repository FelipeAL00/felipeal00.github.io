import { createGlobalStyle } from "styled-components";

import background from "../assets/images/background.svg";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #191920 url(${background}) no-repeat center top;
    --text: #eee;
    --blue: #007fff;
    --containers: #d9d9d9;
    --containers-opacity: 0.3;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media(max-width: 1080px){
      font-size: 93.75%;
    }
    @media(max-width: 720px){
      font: 87.5%;
    }
  }

  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    color: var(--text);
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
