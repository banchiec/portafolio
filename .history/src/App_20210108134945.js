import logo from './logo.svg';
import { Button} from 'react-bootstrap'
import './App.css';
import NavbarPortafolio from './components/NavbarPortafolio'
import CardPresentation from './components/cards/CardPresentation'

function App() {
  return (

    <div className="App">
      <NavbarPortafolio></NavbarPortafolio>
      {/* <CardPresentation></CardPresentation> */}
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
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
