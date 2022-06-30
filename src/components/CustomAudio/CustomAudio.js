import React from "react";
import { usePlyr } from "plyr-react";
import "plyr-react/plyr.css";
import "./style.css";

const controls = `
  <div class="plyr__controls">
      <div class="plyr__control audio-ms"></div>
      <button type="button" class="plyr__control" data-plyr="restart">
          <svg role="presentation"><use xlink:href="#plyr-restart"></use></svg>
          <span class="plyr__tooltip" role="tooltip">Restart</span>
      </button>
      <button type="button" class="plyr__control" data-plyr="rewind">
          <svg role="presentation"><use xlink:href="#plyr-rewind"></use></svg>
          <span class="plyr__tooltip" role="tooltip">Rewind {seektime} secs</span>
      </button>
      <button type="button" class="plyr__control" aria-label="Play, {title}" data-plyr="play">
          <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use></svg>
          <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use></svg>
          <span class="label--pressed plyr__tooltip" role="tooltip">Pause</span>
          <span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span>
      </button>
      <button type="button" class="plyr__control" data-plyr="fast-forward">
          <svg role="presentation"><use xlink:href="#plyr-fast-forward"></use></svg>
          <span class="plyr__tooltip" role="tooltip">Forward {seektime} secs</span>
      </button>
      <div class="plyr__progress">
      <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek"/>
      <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
      <span role="tooltip" class="plyr__tooltip">00:00</span>
      </div>
      <div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>
      <div class="plyr__time plyr__time--duration" aria-label="Duration">00:00</div>
      <button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute">
          <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg>
          <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg>
          <span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span>
          <span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span>
      </button>
      <div class="plyr__volume">
          <input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume"/>
      </div>
      <button type="button" class="plyr__control" data-plyr="captions">
          <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-captions-on"></use></svg>
          <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-captions-off"></use></svg>
          <span class="label--pressed plyr__tooltip" role="tooltip">Disable captions</span>
          <span class="label--not-pressed plyr__tooltip" role="tooltip">Enable captions</span>
      </button>
      <button type="button" class="plyr__control" data-plyr="fullscreen">
          <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-exit-fullscreen"></use></svg>
          <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-enter-fullscreen"></use></svg>
          <span class="label--pressed plyr__tooltip" role="tooltip">Exit fullscreen</span>
          <span class="label--not-pressed plyr__tooltip" role="tooltip">Enter fullscreen</span>
      </button>
  </div>
`;


const PlyrAudio = ({src}) => {

  const videoOptions = {
    controls: controls,
  };
  
  const videoSource = {
    type: "audio",
    sources: [
      {
        type: "audio/mpeg",
        src: src,
      },
    ],
  };
  
  const CustomPlyrInstance = React.forwardRef(
    (props, ref) => {
      const { source, options = null } = props;
      const raptorRef = usePlyr(ref, { options, source });
  
      React.useEffect(() => {

        const { current } = ref;
        if (current.plyr.source === null) return;
  
        const api = current;

        api.plyr.on("play", () => {
          const timeDiv = api.plyr.elements.controls.children[0];
          setTimeout(() => {timeDiv.textContent = ''}, 500);
        })

        api.plyr.on("seeked", () => {
          const timeDiv = api.plyr.elements.controls.children[0];
          const currentTime = (api.plyr.currentTime.toFixed(3)*1000).toFixed(0);
          timeDiv.textContent = `${currentTime} ms`;
        })
      });
  
      return (
        <video
          ref={raptorRef}
          className="plyr-react plyr"
        />
      );
    }
  );

  const ref = React.useRef();

  return (
    <div className="wrapper">
      {videoSource && (
        <CustomPlyrInstance
          ref={ref}
          source={videoSource}
          options={videoOptions}
        />
      )}
    </div>
  );
};

export default PlyrAudio;