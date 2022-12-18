import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
