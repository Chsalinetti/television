import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './secrets';
import Player from './Player';

const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"
const CLIENT_ID = "ddc52ef734194f2492bc8bc09c0fe151"

const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
  ];
  const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function(initial, item) {
      if (item) {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});
  window.location.hash = "";

class AlbumArt extends Component {
    constructor() {
        super();
        this.state = {
          token: null,
        item: {
          album: {
            images: [{ url: "" }]
          },
          name: "",
          artists: [{ name: "" }],
          duration_ms:0,
        },
        is_playing: "Paused",
        progress_ms: 0
      };
      this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
      }
      getCurrentlyPlaying(token) {
        // Make a call using the token
        $.ajax({
          url: "https://api.spotify.com/v1/me/player",
          type: "GET",
          beforeSend: (xhr) => {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
          },
          success: (data) => {
            this.setState({
              item: data.item,
              is_playing: data.is_playing,
              progress_ms: data.progress_ms,
            });
          }
        });
      }
    componentDidMount() {
        // Set token
        let _token = hash.access_token;
        if (_token) {
          // Set token
          this.setState({
            token: _token
          });
        }
      }
    render() {
      return (
        <div className="App">
          <header className="App-header">
          
          {!this.state.token && (
            <a
              className="btn btn--loginApp-link"
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
          )}
          
          {this.state.token && (
        <Player
          item={this.state.item}
          is_playing={this.state.is_playing}
          progress_ms={this.progress_ms}
        />
      )}
     </header>
   </div>
  );
 }
}

export default AlbumArt;