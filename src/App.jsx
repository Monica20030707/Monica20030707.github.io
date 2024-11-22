import './App.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Work from './components/Work';
import About from './components/About';

function App() {

  return (
    // The background gradient is in tailwind config
    <div className="h-screen w-screen bg-custom-gradient text-darkMaroon" >
      <Navbar />
      <Hero />

      {/* Gradient between Hero and Works*/}
      <div className="h-40 bg-gradient-to-b from-beige via-blush to-wine"></div>
      <Work/>

      {/* Gradient between Works and about me*/}
      <div className="h-40 bg-gradient-to-b from-wine via-plum to-deepPurple"></div>
      <About/>

      {/* Gradient between About me and the copyrights*/}
      <div className="h-40 bg-gradient-to-b from-deepPurple via-darkMaroon to-black"></div>

    </div>
  );
}

export default App
