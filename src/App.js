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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Designed from './components/Designed';
import Footer from './components/Footer';
import LatestBlogs from './components/LatestBlogs';
import NativeAnalytics from './components/NativeAnalytics';
import RunRaphtory from './components/RunRaphtory';
import TimeData from './components/TimeData';
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
      <Designed />
      <NativeAnalytics />
      <TimeData />
      <LatestBlogs />
      <RunRaphtory />
      <Footer />
      <ScrollToTop />
      <PreLoader />
    </div>
  );
}

export default App;
