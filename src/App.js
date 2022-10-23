
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar.jsx";
import Home from "./views/Home.jsx"
import Contacto from "./views/Contacto.jsx"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/contacto" element={ <Contacto /> }/>
        </Routes>   
      </BrowserRouter>
    </div>
  );
}

export default App;
