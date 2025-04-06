import './App.css';
import GridSection from './components/GridSection';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <GridSection />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
