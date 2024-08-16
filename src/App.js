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
import Designed from "./components/Designed";
import TimeData from "./components/TimeData";
import NativeAnalytics from "./components/NativeAnalytics";
import LatestBlogs from "./components/LatestBlogs";
import RunRaphtory from "./components/RunRaphtory";
import Footer from "./components/Footer";
import SeeYou from './components/SeeYou';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1600,
      easing: "ease-in-out",
      disable: window.innerWidth < 640,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <Raphtory />
      <SeeYou />
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
