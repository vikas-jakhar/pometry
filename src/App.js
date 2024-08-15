import './App.css';
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
      <Designed/>
      <NativeAnalytics/>
      <TimeData/>
      <LatestBlogs/>
      <RunRaphtory/>
      <Footer/>
    </div>
  );
}

export default App;
