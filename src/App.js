import './App.css';
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import indiaVideo from "./india.mp4"

const plyrProps = {
  source: {
    type: 'video',
    title: 'India',
    sources: [
      {
        src: indiaVideo,
        type: 'video/mp4',
      },
    ]},
  options: {
    controls: [
    'play-large', // The large play button in the center
    'restart', // Restart playback
    'rewind', // Rewind by the seek time (default 10 seconds)
    'play', // Play/pause playback
    'fast-forward', // Fast forward by the seek time (default 10 seconds)
    'progress', // The progress bar and scrubber for playback and buffering
    'current-time', // The current time of playback
    'duration', // The full duration of the media
    'mute', // Toggle mute
    'volume', // Volume control
    'captions', // Toggle captions
    'settings', // Settings menu
    'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
    'fullscreen', // Toggle fullscreen
  ],
  }
}

function MyPlyrVideo() {
  return <Plyr {...plyrProps} />
}

function App() {
  return (
    <div className="App">
      <MyPlyrVideo />
    </div>
  );
}

export default App;
