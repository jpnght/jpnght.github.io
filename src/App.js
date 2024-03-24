import logo from './sp_logo_fullcolours.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          <a className="App-link" href="https://q4svnfvnkb.execute-api.ap-southeast-1.amazonaws.com/dev/get-user/1" >Login to SP (STG)</a>          
        </p>
        <i>This is a demo app for testing integration with Sign APIs</i>
      </header>
    </div>
  );
}

export default App;
