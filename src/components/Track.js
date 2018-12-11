import React, { Component } from 'react'
import PropTypes from 'prop-types'

import "./styles/Track.css";

// Here we use destructuring to extract the props into separate variables
// See https://wesbos.com/destructuring-objects/
class Track extends Component {
// = ({title, artist, playtime, albumart, favorite}) => {
  constructor(props) {
      super(props)

      this.state = {
        className: "game-item",
        title: this.props.title,
        artist: this.props.artist,
        playtime: this.props.playtime,
        albumart: this.props.albumart,
        favorite: this.props.favorite,
      };
    }

    markStar = (event) => {
      console.log("i am in markstar");
      if (this.state.favorite === false) {
        this.setState({
          favorite: true,
        })
      }
      else if (this.state.favorite === true) {
        this.setState({
          favorite: false,
        })
      };
    };

    callCallbackInPlaylist = () => {
      console.log("I am in callCallbackInPlaylist in TRACK");


    }


render() {

  return (

    <li className="track">
      <img className="track--albumart" alt={`album art for ${this.state.title}`} src={this.state.albumart} />
      <h3 className="track--title">{this.state.title}</h3>
      <input
        type="checkbox"
        className="track--favorite"
        checked={this.state.favorite} onChange={this.markStar}
      />
    <p className="track--artist">{this.state.artist}</p>
      <p className="track--playtime">{this.state.playtime}</p>
      <button
        className="track--control track--to-top"
         onClick={this.callCallbackInPlaylist}>
        <span role="img" aria-label="send to top">🔝</span>
      </button>
      <button
        className="track--control track--switch"
        >
        <span role="img" aria-label="switch lists">↔</span>
      </button>
    </li>
  );
};
}


Track.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  playtime: PropTypes.string,
  albumart: PropTypes.string,
  favorite: PropTypes.bool,
}

export default Track;
