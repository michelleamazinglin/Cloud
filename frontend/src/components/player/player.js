import React from 'react';
import '@fortawesome/fontawesome-free/js/all.js'
import ReactAudioPlayer from 'react-audio-player';
import './player.css';

class Player extends React.Component {


  render() {


    return(
      <div className="audio-player">
        <ReactAudioPlayer
            src="https://dl.vgmdownloads.com/soundtracks/kingdom-hearts-original-soundtrack/rijjgiwl/1-01.%20Dearly%20Beloved.mp3"
            // autoPlay
            controls
          />
    </div>
    )
  };
}


export default Player;
