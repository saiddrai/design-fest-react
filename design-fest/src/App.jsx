import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar/Navbar';
import Main from './Main/Main';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar className = "nav"/>
      </header>
      <body>
        <Main/>
      </body>
    </div>
  );
}

export default App;
