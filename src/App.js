import './App.css';
import Algorithm from './components/Algorithm';
import LatestNews from './components/LatestNews';
import Raphtory from './components/Raphtory';

function App() {
  return (
    <div className="overflow-hidden">
      <Algorithm />
      <Raphtory />
      <LatestNews />
    </div>
  );
}

export default App;
