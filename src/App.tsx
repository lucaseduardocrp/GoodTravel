import GlobalStyles from "./styles/GlobalStyles";
import { Container } from "./styles/Container";
import { Header } from "./components/Header";
import { SearchBar } from './components/SearchBar'

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
