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
<<<<<<< HEAD
    <AudioPlayer
      autoPlay
      src="https://dl.vgmdownloads.com/soundtracks/kingdom-hearts-original-soundtrack/rijjgiwl/1-01.%20Dearly%20Beloved.mp3"
      onPlay={e => console.log("onPlay")}
      className="audio-player"
      CustomIcons= { {
        play: playIcon,
        pause:  pauseIcon,
        rewind: backwardIcon,
        forward: forwardIcon,
        loop: loopIcon,
        loopOff: loopIconOff,
        volume: volumeIcon,
        volumeMute: mute
      }
      }
      
      // other props here
    />
=======
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
>>>>>>> master
    )
  };
}


export default Player;




<<<<<<< HEAD
=======
// THIS SUCKS 

// import '@fortawesome/fontawesome-free/js/all.js'
// import './player.css';

// export default class Player extends React.Component {

//     constructor(props) {
//         super(props)

//         this.state = { play: false }

//     }

//     componentWillReceiveProps() {
//         this.setState({ play: true });
//     }

//     componentDidMount() {
//         this.audio.addEventListener("timeupdate", () => {
//             let ratio = this.audio.currentTime / this.audio.duration;
//             let position = (this.timeline.offsetWidth * ratio) + this.timeline.offsetLeft;
//             this.positionHandle(position);
//        });
//     };

//       positionHandle = (position) => {
//         let timelineWidth = this.timeline.offsetWidth - this.handle.offsetWidth;
//         let handleLeft = position - this.timeline.offsetLeft;
//         if (handleLeft >= 0 && handleLeft <= timelineWidth) {
//           this.handle.style.marginLeft = handleLeft + "px";
//         }
//         if (handleLeft < 0) {
//           this.handle.style.marginLeft = "0px";
//         }
//         if (handleLeft > timelineWidth) {
//           this.handle.style.marginLeft = timelineWidth + "px";
//         }
//       };
      
//       mouseMove = (e) => {
//         this.positionHandle(e.pageX);
//         this.audio.currentTime = (e.pageX / this.timeline.offsetWidth) * this.audio.duration;
//       };

//       mouseDown = (e) => {
//         window.addEventListener('mousemove', this.mouseMove);
//         window.addEventListener('mouseup', this.mouseUp);
//       };

//       mouseUp = (e) => {
//         window.removeEventListener('mousemove', this.mouseMove);
//         window.removeEventListener('mouseup', this.mouseUp);
//       };

//       play = () => {
//         if (this.state.play) {
//           this.setState({ play: false });
//           this.audio.pause();
//         } else {
//           this.setState({ play: true });
//           this.audio.play();
//         }
//       }
    
//     render() {
//         return (
//         <div>
        
//             <audio src={this.props.audio}
//                         ref={(audio) => { this.audio = audio } }
//                         autoPlay
//             />

//             <div onClick={this.play} className={!this.state.play ? <i class="fas fa-play"></i> : <i class="fas fa-pause"></i>} />

//             <div id="timeline" onClick={this.mouseMove} ref={(timeline) => { this.timeline = timeline }}>
//                 <div id="handle" onMouseDown={this.mouseDown} ref={(handle) => { this.handle = handle }} />
//             </div>

//         </div>
//         )

//     }
// }

// LETS TRY AGAIN
>>>>>>> master
