import { HashRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./routes";
import { GlobalStyle } from "./styles/globalstyles";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <GlobalStyle />
      <Routes />
      <Footer />
    </HashRouter>
  );
}

export default App;
