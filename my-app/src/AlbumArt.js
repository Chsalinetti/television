import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const CLIENT_ID = "ddc52ef734194f2492bc8bc09c0fe151"

class AlbumArt extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

renderArt=()=> {
  return (
    <div>
      
    </div>
  )
}






  render() {
    return (
      <div>

      </div>
    )
  }
}

export default AlbumArt;