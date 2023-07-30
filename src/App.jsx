import "./App.css";
import { Navbar } from "./containers";
import Main from "./containers/Main";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
