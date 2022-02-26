import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main-content'>
        <MainContent />
        <MainContent />
        <MainContent />
        <MainContent />
        <MainContent />
      </div>
           
    </div>
  );
}

export default App;
