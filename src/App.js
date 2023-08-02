import './App.css';
import About from './Components/About';
import Blogs from './Components/Blogs';
import Homepage from './Components/Homepage';
import OurGallery from './Components/OurGallery';
import Ourcause from './Components/Ourcause';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Homepage></Homepage>
      <Blogs></Blogs>
      <OurGallery></OurGallery>
      <Ourcause></Ourcause>
      <About></About>
    </div>
  );
}

export default App;
