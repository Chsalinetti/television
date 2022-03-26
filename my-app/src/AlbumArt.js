import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './AlbumArt.css';

const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const CLIENT_ID = "ddc52ef734194f2492bc8bc09c0fe151"

class AlbumArt extends Component {
  constructor(props) {
    super(props);

    this.state = {track: "https://i.scdn.co/image/ab67616d0000b273ee6c91661e0c19cd9514d0da"};
  }

renderArt=()=> {
  return (<img className="photo" src={this.state.track}/>);
}

  render() {
    return (
      <div>
        {this.renderArt()}
      </div>
    )
  }
}

export default AlbumArt;