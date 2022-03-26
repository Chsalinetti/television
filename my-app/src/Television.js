import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Television.css';
import AlbumArt from './AlbumArt';
import Image from './Image';
import axios from 'axios';
import {useEffect, useState} from 'react';
import qs from 'qs';

const CLIENT_ID = 'ddc52ef734194f2492bc8bc09c0fe151'
const CLIENT_SECRET = 'ac27c30b26784086902a2ec1ec6854c3'
const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {token: '',
                  album: ''
                };
  }
  
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 5000);
  }
  /**
   * Resets image update timer
   */
  componentWillUnmount() {
    clearInterval(this.interval);
    this.forceUpdate();
  }

  
  getToken=async()=> {
    console.log("Acquiring Token");


    if (this.state.token === '') {

      const hash = window.location.hash
      let authorization_code = window.localStorage.getItem("access_token")

      if (!authorization_code && hash) {
        authorization_code = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("authorization_code", authorization_code)

      }
      if (authorization_code === null) {
        return;
      }

      this.setState({token: authorization_code});
    }
    else {
      try {
        const response = await axios.post('https://accounts.spotify.com/api/token', {
          headers : {
            'grant_type':'refresh_token',
            'refresh_token' : this.state.token,
            'client_id' : CLIENT_ID ,
            'client_secret' : CLIENT_SECRET,
          }
        })
      }
      catch {
        return;
      }
    }
  }



  getArt=async()=> {
    console.log("Updating Album Art")
    try{
      const response = await axios.get("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
          'Authorization': `Bearer ${this.state.token}`
        }
      });

      //console.log(response.data.item.album.images[0].url);
      if (response.status === 200) {
        if (response.data.is_playing) {
          if (this.state.album != response.data.item.album.images[0].url) {
            this.setState({album: response.data.item.album.images[0].url});
          }
        }
        else {
          if (this.state.album != '') {
            this.setState({album: ''});
          }
        }
        
      }
    }
    catch {
      if (this.state.album != '') {
        this.setState({album: ''});
      }
    }
  }

  renderArt=()=> {
    console.log("Rerender")
    this.getArt();
    if (this.state.album === '') {
      return (<Image/>);
    }
    else {
      return (<AlbumArt albumArt={this.state.album}/>);
    }
  }

  render() {
    this.getToken();
    return(
      <div className="App">
        {this.renderArt()}
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
      </div>
    )
  }
}
export default App;

