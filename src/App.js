import './App.css';
import PreLoader from './common/PreLoader';
import Analysis from './components/Analysis';
import Contribute from './components/Contribute';
import Hero from './components/Hero';
import Model from './components/Model';
import Algorithm from './components/Algorithm';
import LatestNews from './components/LatestNews';
import Raphtory from './components/Raphtory';
import MemoryGraph from './components/MemoryGraph';
import ScrollToTop from './common/ScrollToTop';

function App() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Raphtory />
      <Model />
      <Analysis />
      <Contribute />
      <Algorithm />
      <MemoryGraph />
      <LatestNews />
      <ScrollToTop />
      <PreLoader />
    </div>
  );
}

export default App;
