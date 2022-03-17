import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Image.css';
import im from './images/cliff.gif';

class Image extends Component {

    render() {
        return (
            <div>
                    <img className="photo" src={im}/>
            </div>
        )
    }
}
export default Image;