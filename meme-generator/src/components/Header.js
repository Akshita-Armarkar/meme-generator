import memelogo from '../assests/memelogo.svg';
import './header.css';

function App() {
  return (
      <header className="App-header">
        <img src={memelogo} className="" alt="logo" />
        <h1 className='App-text'>Meme Generator</h1>
        <p className='App-para'>Meme-ify the Mundane</p>
      </header>
  );
}

export default App;
