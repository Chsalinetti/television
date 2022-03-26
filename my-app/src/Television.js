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
      const headers = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
          username: CLIENT_ID,
          password: CLIENT_SECRET,
        },
      };
      const data = {
        grant_type: 'client_credentials',
      };
      
      try {
        const response = await axios.post(
          'https://accounts.spotify.com/api/token',
          qs.stringify(data),
          headers
        );
        //console.log(response.data.access_token);
        this.setState({token: response.data.access_token})
      } catch (error) {
        console.log(error);
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
      </div>
    )
  }
}
export default App;

