import logo from './logo.svg';
import { Button} from 'react-bootstrap'
import './App.css';
import NavbarPortafolio from './components/NavbarPortafolio'
import CardPresentation from './components/cards/cardPresentation/CardPresentation'
import ButtonFixed from './components/button/buttonTheme/buttontheme'

function App() {
  return (

    <div className="App">
      <NavbarPortafolio></NavbarPortafolio>
      <CardPresentation></CardPresentation>
      <ButtonFixed></ButtonFixed>
    </div>
  );
}

export default App;
