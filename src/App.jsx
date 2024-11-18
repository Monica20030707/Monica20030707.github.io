import './App.css'

import Navbar from './components/Navbar'

function App() {

  return (
    <div
      className="h-screen w-screen bg-gradient-custom bg-cover text-white"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #F5F5DC, #E3B6B1, #845162, #522C5D, #29104A, #150016)",
      }}
    >
      <Navbar />
      <div className="flex flex-col justify-center items-center h-full px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl max-w-2xl">Here is some introductory text about me!</p>
      </div>
    </div>
  );
}

export default App
