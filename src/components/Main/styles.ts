import styled, {css} from 'styled-components';
import { BsFillPersonFill } from 'react-icons/bs'
import { FiCalendar, FiSearch } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  height: 92vh;
  padding: 5rem 18rem;
  display: flex;
  flex-direction: column;
  justify-content: start;

  h2{
    margin-top: 8rem;
    color: #ffffff;
    font-size: 5.4rem;
    font-weight: 700;
    margin-bottom: 9rem;
  }
`;

export const SearchBar = styled.div`
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.4rem 0 3rem;
    margin-top: 12rem;
    background: rgba(255,255,255,0.25);
    border-radius: 16px;

    button{
      color: var(--secundary);
      font-size: 1.8rem;
      font-weight: 500;
      background: var(--white);
      padding: 1.2rem 3rem;
      border-radius: 20px;
      transition: all .25s ease;

      &:hover{
        transform: scale(1.05);
      }
    }
  `;

export const SearchInput = styled.div`
  display: flex;

  input{
    width: 230px;
    display: flex;
    align-items: center;
    margin-left: 2rem;
    font-size: var(--p-font);
    color: var(--grey);

    &:focus{
      outline: none;
    }
    &::-webkit-search-cancel-button {
      appearance: none;
    }
  }
`;

export const DateInput = styled.div``;

export const PeopleInfo = styled.div`
  display: flex;

  span{
    font-size: var(--p-font);
    color: var(--grey);
    margin-left: 10px;
  }
`;

const iconsCss = css`
  width: 20px;
  height: 20px;
  color: rgba(255,255,255,0.55);
  flex-shrink: 0;

`; 

export const CalendarIcon = styled(FiCalendar)`
  ${iconsCss}
`;

export const SearchIcon = styled(FiSearch)`
  ${iconsCss}
`;

export const PersonIcon = styled(BsFillPersonFill)`
  ${iconsCss}
`;
