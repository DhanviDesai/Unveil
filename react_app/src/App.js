import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <div className="users-list"></div>
        <div className="repos-list"></div>
      </div>
    </div>
  );
}

export default App;
