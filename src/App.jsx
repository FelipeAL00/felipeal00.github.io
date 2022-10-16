import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./routes";
import { GlobalStyle } from "./styles/globalstyles";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyle />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
