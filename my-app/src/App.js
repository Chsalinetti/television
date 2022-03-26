import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import AlbumArt from './AlbumArt';
import Image from './Image';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {albumArt: 'https://i.scdn.co/image/ab67616d0000b273ee6c91661e0c19cd9514d0da'};
  }
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 5000);
  }
  /**
   * Resets image update timer
   */
  componentWillUnmount() {
    clearInterval(this.interval);
  }


  renderApp=()=> {
    return (<AlbumArt albumArt={this.state.albumArt}/>);
  }
  render() {
    return(
      <div className="App">
      {this.renderApp()}
      </div>
    )
  }
}
export default App;

