import React from 'react';
// import ReactLivestream from 'react-livestream';
import ReactPlayer from "react-player"

class LiveStreaming extends React.Component{

    render() {

        return (

            <ReactPlayer
                url="https://www.youtube.com/watch?v=AaK0AKQFCNY"
            />
            // <ReactLivestream
            // platform="youtube"
            // youtubeApiKey={`AIzaSyDgiTOTuXt7R6b6FUzzBaDGOLQfKt-X-4c`}
            // youtubeChannelId="UC83RKJs4eKHVE9v0YUyqzgg"
            // />
        )
    }

}

export default LiveStreaming;
      
