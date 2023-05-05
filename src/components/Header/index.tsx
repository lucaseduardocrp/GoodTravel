import { Heading, Logo } from './styles';

export function Header() {
  return (
    <Heading id='heading'>
      <nav>
        <h1>
          <a href="#heading">
            <Logo src='../../public/GoodTravel.svg'/>
          </a>
        </h1>
        <ul>
          <li>
            <a href="#" data-text="Home">Home</a>
          </li>
          <li>
            <a href="#" data-text="Stays">Stays</a>
          </li>
          <li>
            <a href="#" data-text="Flights">Flights</a>
          </li>
          <li>
            <a href="#" data-text="Packages">Packages</a>
          </li>
          <li>
            <a href="#" data-text="Login">Login</a>
          </li>
        </ul>
      </nav>
    </Heading>
  );
}
