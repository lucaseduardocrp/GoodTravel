import styled, {css} from 'styled-components';
import { BsFillPersonFill } from 'react-icons/bs'
import { FiCalendar, FiSearch } from 'react-icons/fi';

export const Container = styled.div`
  padding: 5rem 18rem;
  display: flex;
  gap: 6rem;
  flex-direction: column;
  justify-content: start;

  h2{
    margin: 12rem 0 0rem 0;
    color: #ffffff;
    font-size: var(--h2-font);
    font-weight: 700;
  }

  h3{
    font-size: var(--h3-font);
    color: var(--white);
    margin-bottom: 4rem;
  }
`;

export const Content = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 2rem;
  background: rgba(255,255,255,0.25);
  border-radius: 12px;
`;

export const SearchInput = styled.div`
  display: flex;

  >input{
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

export const PeopleInfo = styled.div`
  display: flex;

  span{
    font-size: var(--p-font);
    color: var(--grey);
    margin-left: 10px;
  }
`;

export const CategoryContent = styled.div`
  .categories{
    display: flex;
    justify-content: space-between;
  }
`;

export const Slidebar = styled.div`
  display: flex;
  gap: 4rem;
`;

// Icons Elements

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

