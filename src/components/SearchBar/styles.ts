import styled, {css} from 'styled-components';
import { BsFillPersonFill } from 'react-icons/bs'
import { FiCalendar, FiSearch } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  height: 92vh;
  padding: 5rem 18rem;
  display: flex;
  gap: 5rem;
  flex-direction: column;
  justify-content: start;

  h2{
    margin: 8rem 0;
    color: #ffffff;
    font-size: 5.4rem;
    font-weight: 700;
  }

  .titleContent{
    font-size: var(--h3-font);
    color: var(--white);
    }

     p{
        font-size: var(--sm-font);
        color: var(--grey);
    }
`;

export const Content = styled.div`
  height: 5.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.4rem 0 3rem;
  /* margin-top: 6rem; */
  background: rgba(255,255,255,0.25);
  border-radius: 16px;
`;

export const SearchInput = styled.div`
  display: flex;

  >input{
    width: 22rem;
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

export const DateButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: var(--sm-font);
  font-weight: 500;
  color: var(--grey);
`;

export const SearchButton = styled.button`
  color: var(--secundary);
  font-size: 1.8rem;
  font-weight: 500;
  background: var(--white);
  padding: 1.2rem 3.8rem;
  border-radius: 20px;
  transition: all .25s ease;

  &:hover{
    transform: scale(1.05);
  }
`;

export const TopCategories = styled.div`
  display: flex;
  justify-content: space-between;
`;

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

