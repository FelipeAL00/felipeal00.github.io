import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./routes";
import { GlobalStyle } from "./styles/globalstyles";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
