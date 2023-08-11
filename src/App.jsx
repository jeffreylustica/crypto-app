import "./App.css";
import { Navbar, Main, Footer } from "./containers";
import { Cryptocurrencies, News, CryptoDetails } from "./components";
import { Home } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/news" element={<News />} />
          <Route path="/crypto/:coinId" element={<CryptoDetails />} />
        </Routes>
        <Footer />
      </Main>
    </div>
  );
}

export default App;
