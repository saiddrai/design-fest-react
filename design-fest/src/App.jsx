import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar/Navbar';
import Main from './Main/Main';
import About from './Aboutsection/About';
import Speakers from './Speakers/Speakers';
import MainSpeaker from './MainSpeaker/MainSpealer';


 export  function styleFlex(direction){
  const mystyle = {
    display: "flex",
    flexDirection : direction
  }
  return mystyle;
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar className = "nav"/>
      </header>
      <body>
        <Main/>
        <About />
        <Speakers />
        <MainSpeaker />
      </body>
    </div>
  );
}

export default App;
