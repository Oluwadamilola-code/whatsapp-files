import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

const App=({props})=> {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Hello, Oluwadamilola 
        </a>
      </header> */}
      <Button bg={} click={()=>alert("Hellooo")}/>
    </div>
  );
}

export default App;