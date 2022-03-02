import './App.css';
import evan from './evan.jpg';
import AlbumArt from './AlbumArt';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="photo" src={evan}/>
      </header>
      <AlbumArt/>
    </div>
  );
}

export default App;
