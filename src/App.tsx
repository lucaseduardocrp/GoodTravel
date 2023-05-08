import GlobalStyles from "./styles/GlobalStyles";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Offer } from "./pages/Offer";

function App() {
  return (
    <>      
      <Header />
      <Home />
      <Offer />
      <GlobalStyles />
    </>
  )
}

export default App
