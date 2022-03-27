import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './Television';
import './AlbumArt.css';

//https://i.scdn.co/image/ab67616d0000b273ee6c91661e0c19cd9514d0da

class AlbumArt extends Component {
  constructor(props) {
    super(props);
  }

renderArt=()=> {
  return (<img className="album" src={this.props.albumArt}/>);
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