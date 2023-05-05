import { Container, SearchInput, DateInput, PeopleInfo, SearchBar, CalendarIcon, SearchIcon, PersonIcon } from './styles';

export function Main() {
  return (
    <Container>
      <h2>THE WHOLE WORLD AWAITS.</h2>
      <SearchBar>
        <SearchInput>
          <SearchIcon />
          <input type="search" name="search" id="search" autoComplete='off' placeholder='Search destinations, hotels' />
        </SearchInput>
        <DateInput>
          <CalendarIcon />
          <input type="date" name="Check in" id="checkIn" />
          <CalendarIcon />
          <input type="date" name="Check Out" id="checkOut" />
        </DateInput>

        <PeopleInfo>
          <PersonIcon />
          <span>1 room</span>
          <span>, 2 adults</span>
        </PeopleInfo>

        <button>Search</button>
      </SearchBar>
    </Container>
  );
}
