
import "./App.css";
//import Button from "./components/Button/Button";
import Navbar from "./components/Nav/Navbar";
import Profilesearch from "./views/Profilesearch";
import Duosearch from "./views/Duosearch";
import Faq from "./views/Faq";
import About from "./views/About";
import Home from "./views/Home";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/faq" element={<Faq/>} />
        <Route path="/profile/search" element={<Profilesearch/>}/>
        <Route path="/duo/search" element={<Duosearch/>} />
      </Routes>
    </div>
  );
}

export default App;