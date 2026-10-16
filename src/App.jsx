import { useState } from 'react';
import Hero from './Component/Pages/Hero';
import Navbar from './Component/Navbar/Navbar';
import About from './Component/Pages/About';
import Project from './Component/Pages/Project';
import Skills from './Component/Pages/Skills';
import Footer from './Component/Footer/Footer';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Footer />
    </>
  );
}

export default App;