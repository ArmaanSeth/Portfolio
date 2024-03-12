import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projects/Projects';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <TechStack/>
      <Projects/>
    </div>
  );
}

export default App;
