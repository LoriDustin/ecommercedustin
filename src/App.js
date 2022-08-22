import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  let saludo = 'Hola mundo';
  const styles = {
    cuadroTres: {
      width: '200px',
      height: '200px',
      backgroundColor:'green',
    },
  }


  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="cuadrado">{saludo}</div>
        <div style={{width:'150px', height:'150px', backgroundColor:'blue'}}></div>
        <div style={styles.cuadroTres}></div>
        
        {/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
