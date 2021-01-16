import './App.css';
import NavbarPortafolio from './components/NavbarPortafolio'
import CardPresentation from './components/cards/cardPresentation/CardPresentation'
import ButtonFixed from './components/button/buttonTheme/buttontheme'
import CardAboutMe from './components/cards/cardAboutMe/CardAboutMe'
import CardProyects from './components/cards/cardProyects/CardProyects'

function App() {
  return (

    <div className="App">
      <NavbarPortafolio></NavbarPortafolio>
      <ButtonFixed></ButtonFixed>
 s     <CardPresentation></CardPresentation>
      <CardAboutMe></CardAboutMe>
      
    </div>
  );
}

export default App;
