import './App.css';
import NavbarPortafolio from './components/NavbarPortafolio'
import CardPresentation from './components/cards/cardPresentation/CardPresentation'
import ButtonFixed from './components/button/buttonTheme/buttontheme'
import CardAboutMe from './components/cards/cardAboutMe/CardAboutMe'

function App() {
  return (

    <div className="App">
      <NavbarPortafolio></NavbarPortafolio>
      <CardPresentation></CardPresentation>
      <ButtonFixed></ButtonFixed>
      <CardAboutMe></CardAboutMe>
    </div>
  );
}

export default App;
