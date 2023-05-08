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

  .btn{
    color: var(--secundary);
    font-size: 1.8rem;
    font-weight: 500;
    background: var(--white);
    padding: 1rem 3rem;
    border-radius: 20px;
    transition: all .25s ease;

    &:hover{
      transform: scale(1.05);
    }
  }

  .btn2{
    width: 13rem;
    color: var(--white);
    font-size: var(--sm-font);
    font-weight: 500;
    background: var(--secundary);
    padding: 1rem 0;
    border-radius: 20px;
    transition: all .25s ease;

    &:hover{
      transform: translateX(4px);
    }
  }

  :root{
    --primary: #19DACE;
    --secundary: #009AED;
    --grey: #BFBFBF;
    --white: #ffffff;

    --h1-font: 4rem;
    --h2-font: 5.6rem;
    --h3-font: 3.6rem;
    --h4-font: 2rem;
    --p-font: 1.8rem;
    --sm-font: 1.6rem;
  }
`;

