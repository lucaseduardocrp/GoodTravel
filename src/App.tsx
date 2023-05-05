import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Container } from "./styles/Container";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Main />
      </Container>
      <GlobalStyles />
    </>
  )
}

export default App
