import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Image.css';
import radiohead from './images/radiohead.gif';
import psy1 from './images/psy1.gif';

class Image extends Component {

    render() {
        return (
            <div>
                    <img className="photo" src={psy1}/>
            </div>
        )
    }
}
export default Image;