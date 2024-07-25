import Navbar from './components/Navbar';
import Home from './components/Home';
import Academics from './components/Academics';
import Admission from './components/Admission';
import Faculty from './components/Faculty';
import Students from './components/Students';
import Gallery from './components/Gallery'
import Footer from './components/Footer';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router> 
      <Navbar/>
      <div style={{ marginTop: "15px"}}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/academics" element={<Academics/>}/>
        <Route path="/admission" element={<Admission/>}/>
        <Route path="/faculty" element={<Faculty/>}/>
        <Route path="/students" element={<Students/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

