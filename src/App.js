import './App.css';
import Analysis from './components/Analysis';
import Contribute from './components/Contribute';
import Hero from './components/Hero';
import Model from './components/Model';
import Raphtory from './components/Raphtory';

function App() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Raphtory />
      <Model />
      <Analysis />
      <Contribute />
    </div>
  );
}

export default App;
