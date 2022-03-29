import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './Television';
import './AlbumArt.css';

/**
 * Renders album art from given link
 */

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