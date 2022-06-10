import './App.css';
//import MyPlyrVideo from './components/Video/Video';
import PlyrVideo from './components/CustomVideo/CustomVideo';
import PlyrAudio from './components/CustomAudio/CustomAudio';

function App() {
  return (
    <div className="App">
      <PlyrVideo />
      <PlyrAudio />
    </div>
  );
}

export default App;
