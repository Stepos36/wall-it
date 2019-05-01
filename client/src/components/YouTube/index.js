import React from 'react';
import YouTube from 'react-youtube';
 
class YVideo extends React.Component {
  render() {
    const opts = {
      height: 'auto',
      width: '215',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
 
    return (
      <YouTube
        videoId="F3QpgXBtDeo"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YVideo

