import { Container, SearchInput, DateButton, SearchButton, TopCategories, PeopleInfo, Content,  CalendarIcon, SearchIcon, PersonIcon } from './styles';
import Frame21 from '../../../public/Frame 21.svg';
import Frame22 from '../../../public/Frame 22.svg';
import Frame23 from '../../../public/Frame 23.svg';
import Frame25 from '../../../public/Frame 25.svg';
import Frame26 from '../../../public/Frame 26.svg';
import Frame27 from '../../../public/Frame 27.svg';
import Frame28 from '../../../public/Frame 28.svg';
import Frame29 from '../../../public/Frame 29.svg';
import Frame30 from '../../../public/Frame 30.svg';
import Frame33 from '../../../public/Frame 33.svg';  

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
        <Category iconImage={Frame21} />
        <Category iconImage={Frame22} />
        <Category iconImage={Frame23} />
        <Category iconImage={Frame25} />
        <Category iconImage={Frame26} />
        <Category iconImage={Frame27} />
        <Category iconImage={Frame28} />
        <Category iconImage={Frame29} />
        <Category iconImage={Frame30} />
        <Category iconImage={Frame33} />
      </TopCategories>
     
    </Container>
  );
}
