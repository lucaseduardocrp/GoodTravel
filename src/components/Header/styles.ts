import styled from "styled-components";

export const Heading = styled.header`
  nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 9rem;

    ul{
      display: flex;
      align-items: center;
      
      a{
        position: relative;
        font-family: 'Roboto', sans-serif;
        margin-right: 3rem;
        color: #ffffff;
        font-size: 1.8rem;
        font-weight: 700;

        &::before{
          content: attr(data-text);
          position: absolute;
          color: var(--primary);
          width: 0;
          overflow: hidden;
          transition: .40s;
        }

        &:hover::before{
          width: 100%;
        }
      }
    }
  }
`;


export const Logo = styled.img``;

