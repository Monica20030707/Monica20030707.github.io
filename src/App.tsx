import './assets/styles/App.css'
import Hero from './components/Hero.tsx';
import Navbar from './components/Navbar.tsx';
import Work from './components/Work.tsx';
import About from './components/About.tsx';
import Footer from './components/Footer.tsx';

function App() {

  return (
    // The background gradient is in tailwind config
    <div className="h-screen w-screen bg-custom-gradient text-darkMaroon" >
      <Navbar />
      <Hero />

      {/* Gradient between Hero and Works*/}
      <div className=" h-40 bg-gradient-to-b from-beige via-blush to-wine"></div>
      <Work/>

      {/* Gradient between Works and about me*/}
      <div className="h-40 bg-gradient-to-b from-wine via-plum to-deepPurple"></div>
      <About/>

      {/* Gradient between About me and the copyrights*/}
      <div className="h-40 bg-gradient-to-b from-deepPurple via-darkMaroon to-black"></div>
      <Footer />
      
    </div>
  );
}

export default App
