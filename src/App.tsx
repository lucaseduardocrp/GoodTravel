import { Header } from "./components/Header";
import { SearchBar } from './components/SearchBar'
import { Container } from "./styles/Container";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Container>
        <Header />
        <SearchBar />
      </Container>
      <GlobalStyles />
    </>
  )
}

export default App
