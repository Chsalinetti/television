import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Television.css';
import AlbumArt from './AlbumArt';
import Image from './Image';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {token: 'BQAX4Sx-glJnj26OMxvIB4iVEhmbsFq380F9-IKyO1Wz6FgkmMoxGiZoV8gMdHNGvjX7vJyC95icGTnut28AMV76_Ix6wCf_pGycwVfLQnX1CsCAAH74vuA2577ilqBm4DmVQRLUnIHbG_XjnfeYjeN2ixBGqd6BJALovoEs',
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
      if (response.status === 401) {
        console.log("Expired Token")
        this.setState({album: ''});
      }
      if (response.status === 429) {
        console.log("Too fast")
      }


    }
    catch {
      console.log("Request Error!")
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
    return(
      <div className="App">
        {this.renderArt()}
      </div>
    )
  }
}
export default App;

