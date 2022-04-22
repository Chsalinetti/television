import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './Television';
import './Image.css';
import i0 from './images/0.webp';
import i1 from './images/1.webp';
import i2 from './images/2.webp';
import i3 from './images/3.webp';
import i4 from './images/4.webp';
import i5 from './images/5.webp';
import i6 from './images/6.webp';
import i7 from './images/7.webp';
import i8 from './images/8.webp';
import i9 from './images/9.webp';
import i10 from './images/10.webp';
import i11 from './images/11.webp';
import i12 from './images/12.webp';
import i13 from './images/13.webp';
import i14 from './images/14.webp';
import i15 from './images/15.webp';
import i16 from './images/16.webp';
import i17 from './images/17.webp';
import i18 from './images/18.webp';
import i19 from './images/19.webp';
import i20 from './images/20.webp';
import i21 from './images/21.webp';
import i22 from './images/22.webp';
import i23 from './images/23.webp';

/**
 * Renders image on screen dependent on the hour
 * Images by AnasAbdin
 * https://anasabdin.tumblr.com/
 */

class Image extends Component {
    /**
     * Renders differant image every hour
     * @returns Image
     */
    renderImage=()=> {
        console.log("Updating background");
        const d = new Date();
        let hour = d.getHours();

        switch (hour) {
            case 0:
                return (<img className="photo" src={i0}/>);
            case 1:
                return (<img className="photo" src={i1}/>);
            case 2:
                return (<img className="photo" src={i2}/>);
            case 3:
                return (<img className="photo" src={i3}/>);
            case 4:
                return (<img className="photo" src={i4}/>);
            case 5:
                return (<img className="photo" src={i5}/>);
            case 6:
                return (<img className="photo" src={i6}/>);
            case 7:
                return (<img className="photo" src={i7}/>);
            case 8:
                return (<img className="photo" src={i8}/>);
            case 9:
                return (<img className="photo" src={i9}/>);
            case 10:
                return (<img className="photo" src={i10}/>);
            case 11:
                return (<img className="photo" src={i11}/>);
            case 12:
                return (<img className="photo" src={i12}/>);
            case 13:
                return (<img className="photo" src={i13}/>);
            case 14:
                return (<img className="photo" src={i14}/>);
            case 15:
                return (<img className="photo" src={i15}/>);
            case 16:
                return (<img className="photo" src={i16}/>);
            case 17:
                return (<img className="photo" src={i17}/>);
            case 18:
                return (<img className="photo" src={i18}/>);
            case 19:
                return (<img className="photo" src={i19}/>);
            case 20:
                return (<img className="photo" src={i20}/>);
            case 21:
                return (<img className="photo" src={i21}/>);
            case 22:
                return (<img className="photo" src={i22}/>);
            case 23:
                return (<img className="photo" src={i23}/>);
        }
        console.log("Time error at: " + hour);
    }

    render() {
        return (
            <div>
                {this.renderImage()}
            </div>
        )
    }
}
export default Image;