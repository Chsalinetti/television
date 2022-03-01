import logo from './logo.svg';
import './App.css';
import evan from './evan.jpg';

const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="photo" src={evan}/>
        <p>
          Bruhzinga!
        </p>
        
      </header>
    </div>
  );
}

export default App;
