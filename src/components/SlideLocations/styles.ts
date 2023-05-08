import styled from 'styled-components';

export const Container = styled.div`
  img{
    min-width: 310px;
    object-fit: cover;
    border-radius: 12px;
    transition: all .30s ease;
    &:hover{
      transform: scale(0.95);
    }
  }
`;
