// THIS WORKS

import React from 'react';
import '@fortawesome/fontawesome-free/js/all.js'
import ReactAudioPlayer from 'react-audio-player';
import './player.css';

class Player extends React.Component {


  render() {

    // let playIcon = <i class="fas fa-play"></i>
    // let pauseIcon = <i class="fas fa-pause"></i>
    // let forwardIcon = <i class="fas fa-forward"></i>
    // let backwardIcon = <i class="fas fa-backward"></i>
    // let loopIcon = <i class="fas fa-infinity"></i>
    // let loopIconOff = <i class="fas fa-not-equal"></i>
    // let mute = <i class="fas fa-volume-off"></i>
    // let volumeIcon = <i class="fas fa-music"></i>
//...


    return(
      <div className="audio-player">
        <ReactAudioPlayer
            src="https://dl.vgmdownloads.com/soundtracks/kingdom-hearts-original-soundtrack/rijjgiwl/1-01.%20Dearly%20Beloved.mp3"
            // autoPlay
            controls
          />


        {/* <AudioPlayer
            // autoPlay
            src="https://dl.vgmdownloads.com/soundtracks/kingdom-hearts-original-soundtrack/rijjgiwl/1-01.%20Dearly%20Beloved.mp3"
            // onPlay={e => console.log("onPlay")}
            
            // CustomIcons= { {
            //   // play: playIcon,
            //   // pause:  pauseIcon,
            //   // rewind: backwardIcon,
            //   // forward: forwardIcon,
            //   // loop: loopIcon,
            //   // loopOff: loopIconOff,
            //   // volume: volumeIcon,
            //   // volumeMute: mute
            
          
    
        /> */}
    </div>
    )
  };
}


export default Player;


