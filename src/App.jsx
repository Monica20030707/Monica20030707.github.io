import './App.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {

  return (
    <div 
      className="h-screen w-screen bg-gradient-to-b from-beige via-blush via-wine via-plum via-deepPurple to-darkMaroon bg-cover text-darkMaroon"
    >
      <Navbar />
      <Hero />
    </div>
  );
}

export default App
