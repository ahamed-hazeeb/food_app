import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import Navbar from "./Compnents/Navbar";
import Home from "./pages/Home";
import Footer from "./Compnents/Footer";
import "./style/index.scss";
function App() {
  return (
    <Router>
    <Navbar/>
    <div className="container main">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Recipes" element={<Recipes/>}/>
      <Route path="/Settings" element={<Settings/>}/>
      </Routes>
     
    </div>
    <Footer/>
     </Router>
  );
}

export default App;
