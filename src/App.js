import './App.css';
//import MyPlyrVideo from './components/Video/Video';
import PlyrVideo from './components/CustomVideo/CustomVideo';
import PlyrAudio from './components/CustomAudio/CustomAudio';

import inspirationAudio from "./inspiration.mp3";
import indiaVideo from "./india.mp4";


function App() {
  return (
    <div className="App">
      <PlyrVideo src={indiaVideo}/>
      <PlyrAudio src={inspirationAudio}/>
    </div>
  );
}

export default App;
