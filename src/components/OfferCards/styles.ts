import styled from 'styled-components';

export const Container = styled.div`
  width: 450px;
  display: flex;
  gap: 2rem;
  padding: 1.5rem;
  box-shadow: 0px 0px 12px #000;
  border-radius: 8px;

  img{
    width: 200px;
    object-fit: cover;
  }

 .cardInfo{
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h4{
      font-size: var(--h4-font);
    }

    span{
      font-size: var(--sm-font);
    }
  }
`;
