// src/App.jsx

import Navbar from './Components/Navbar/Navbar';
import ProjectSection from './Components/ProjectSection/ProjectSection';
import './App.css'
import ProjectVideoCard from './Components/ProjectVideoCard/ProjectVideoCard';
import ThreadBuild from './Components/ThreadBuild/ThreadBuild';
import StructureYourPointers from './Components/StructureYourPointers/StructureYourPointers';
import FourSAMethod from './Components/FourSAMethod/FourSAMethod';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <ProjectSection />
      <div className='section-1'>
      <ProjectVideoCard/>
      <ThreadBuild/>
      </div>
      <div className='section-2'>
      <StructureYourPointers/>
      <FourSAMethod/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
