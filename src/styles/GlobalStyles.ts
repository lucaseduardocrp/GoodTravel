import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
  }

  html{
    min-height: 100%;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  *, button, input{
    border: 0;
    background: none;
  } 

  :root{
    --primary: #19DACE;
    --secundary: #009AED;
    --grey: #BFBFBF;
    --white: #ffffff;

    --h1-font: 4rem;
    --h2-font: 4rem;
    --h3-font: 3rem;
    --h4-font: 2rem;
    --p-font: 1.8rem;
    --sm-font: 1.6rem;
  }
`;

