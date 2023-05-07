import { 
  Container,
  SearchInput,
  DateButton,
  SearchButton,
  TopCategories,
  TitleContent,
  Slidebar,
  PeopleInfo,
  Content,
  CalendarIcon,
  SearchIcon,
  PersonIcon 
} from './styles';
  
import { Category } from '../Category';
import { SlideLocations } from '../SlideLocations';

export function SearchBar() {
  return (
    <Container>
      <h2>THE WHOLE WORLD<br/> AWAITS.</h2>
      <Content>
        <SearchInput>
          <SearchIcon />
          <input type="search" name="search" id="search" autoComplete='off' placeholder='Search destinations,
          hotels' />
        </SearchInput>
      
        <DateButton> <CalendarIcon />Check In</DateButton>
        <DateButton> <CalendarIcon />Check Out</DateButton>

        <PeopleInfo>
          <PersonIcon />
          <span>1 room</span>
          <span>,
            2 adults</span>
        </PeopleInfo>

        <SearchButton>Search</SearchButton>
      </Content>

      <TitleContent>Top Categories</TitleContent>

      <TopCategories>
        <Category iconImage={'../../../public/Frame 21.svg'} />
        <Category iconImage={'../../../public/Frame 22.svg'} />
        <Category iconImage={'../../../public/Frame 23.svg'} />
        <Category iconImage={'../../../public/Frame 25.svg'} />
        <Category iconImage={'../../../public/Frame 26.svg'} />
        <Category iconImage={'../../../public/Frame 27.svg'} />
        <Category iconImage={'../../../public/Frame 28.svg'} />
        <Category iconImage={'../../../public/Frame 29.svg'} />
        <Category iconImage={'../../../public/Frame 30.svg'} />
        <Category iconImage={'../../../public/Frame 33.svg'} />
      </TopCategories>

      <TitleContent>Top Vacation Destinations</TitleContent>

      <Slidebar>
        <SlideLocations slideImage={'../../../public/SlideImg1.jpg'} />
        <SlideLocations slideImage={'../../../public/SlideImg2.jpg'} />
        <SlideLocations slideImage={'../../../public/SlideImg4.jpg'} />
        <SlideLocations slideImage={'../../../public/SlideImg5.jpg'} />
      </Slidebar>
     
    </Container>
  );
}
