import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/Playlist.css';

import Track from './Track';



class Playlist extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tracks: this.props.tracks,
      trackCount: this.props.tracks.length,
    }
  // const tracks = props.tracks;
  // const trackCount = tracks.length;
  }
  // const playtime = calculatePlayTime(tracks);
  moveToTop = () => {
    
  }


  render() {
    const calculatePlayTime = (tracks) => {
      let minutes = 0;
      let seconds = 0;
      tracks.forEach((track) => {
        const times = track.playtime.split(':');
        minutes += parseInt(times[0]);
        seconds += parseInt(times[1]);
      });

      minutes += Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);

      seconds %= 60;
      minutes %= 60;

      seconds = ("" + seconds).padStart(2, "0");
      minutes = ("" + minutes).padStart(2, "0");

      return `${hours}:${minutes}:${seconds}`;
    }

    const playtime = calculatePlayTime(this.state.tracks);
    const trackElements = this.state.tracks.map((track, i) => {
      // We use "spread syntax" here to pass in all the properties of
      // the variable 'track' as props. Go look it up!
      // {...track}

      return (
      <Track
        key={`${track.title}${track.artist}`}
        title={track.title} artist={track.artist} playtime={track.playtime} albumart={track.albumart}  favorite={false}
        callback={this.moveToTop}
        />);
    });

    return (
    <div className="playlist">
      <h2>{this.props.side} Playlist</h2>
      <p>
        {this.state.trackCount} tracks - {playtime}
      </p>
      <ul className="playlist--track-list">
        {trackElements}
      </ul>
    </div>
  );
}
}


Playlist.propTypes = {
  tracks: PropTypes.array,
  side: PropTypes.string,
}

export default Playlist;
