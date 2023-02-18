import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="Slogan"> We're here to Make History </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p> 진정성 온라인 학습기록 공간 </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;

