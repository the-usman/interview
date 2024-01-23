import logo from './logo.svg';
import './App.css';
import Header from './assets/components/Header';
import CoinPrice from './assets/components/CoinPrice';
import ImageSection from './assets/components/ImageSection';

function App() {
  return (
    <div className="App">
      <Header />
      <CoinPrice />
      <ImageSection />
    </div>
  );
}

export default App;
