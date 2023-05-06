import { TbBeach } from 'react-icons/tb';

import { Container, SearchInput, DateButton, SearchButton, TopCategories, PeopleInfo, Content, CalendarIcon, SearchIcon, PersonIcon } from './styles';
import { Category } from '../Category';

export function SearchBar() {
  return (
    <Container>
      <h2>THE WHOLE WORLD<br/> AWAITS.</h2>
      <Content>
        <SearchInput>
          <SearchIcon />
          <input type="search" name="search" id="search" autoComplete='off' placeholder='Search destinations, hotels' />
        </SearchInput>
      
        <DateButton> <CalendarIcon />Check In</DateButton>
        <DateButton> <CalendarIcon />Check Out</DateButton>

        <PeopleInfo>
          <PersonIcon />
          <span>1 room</span>
          <span>, 2 adults</span>
        </PeopleInfo>

        <SearchButton>Search</SearchButton>
      </Content>

      <div className='titleContent'>
        <h3>Top Categories</h3>
      </div>

      <TopCategories>
        <Category icon={TbBeach} title='Somone Title' />
        <Category icon={TbBeach} title='Somone Title' />
      </TopCategories>
     
    </Container>
  );
}
