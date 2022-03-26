import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Image.css';
import a from './images/0.webp';
import b from './images/1.webp';
import c from './images/2.webp';
import d from './images/3.webp';
import e from './images/4.webp';
import f from './images/5.webp';
import g from './images/6.webp';
import h from './images/7.webp';
import i from './images/8.webp';
import j from './images/9.webp';
import k from './images/10.webp';
import l from './images/11.webp';
import m from './images/12.webp';
import n from './images/13.webp';
import o from './images/14.webp';
import p from './images/15.webp';
import q from './images/16.webp';
import r from './images/17.webp';
import s from './images/18.webp';
import t from './images/19.webp';
import u from './images/20.webp';
import v from './images/21.webp';
import w from './images/22.webp';
import x from './images/23.webp';

class Image extends Component {
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 20000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }
    renderImage=()=> {
        const d = new Date();
        let hour = d.getHours();
        switch (hour) {
            case 0:
                return (<img className="photo" src={a}/>);
            case 1:
                return (<img className="photo" src={b}/>);
            case 2:
                return (<img className="photo" src={c}/>);
            case 3:
                return (<img className="photo" src={d}/>);
            case 4:
                return (<img className="photo" src={e}/>);
            case 5:
                return (<img className="photo" src={f}/>);
            case 6:
                return (<img className="photo" src={g}/>);
            case 7:
                return (<img className="photo" src={h}/>);
            case 8:
                return (<img className="photo" src={i}/>);
            case 9:
                return (<img className="photo" src={j}/>);
            case 10:
                return (<img className="photo" src={k}/>);
            case 11:
                return (<img className="photo" src={l}/>);
            case 12:
                return (<img className="photo" src={m}/>);
            case 13:
                return (<img className="photo" src={n}/>);
            case 14:
                return (<img className="photo" src={o}/>);
            case 15:
                return (<img className="photo" src={p}/>);
            case 16:
                return (<img className="photo" src={q}/>);
            case 17:
                return (<img className="photo" src={r}/>);
            case 18:
                return (<img className="photo" src={s}/>);
            case 19:
                return (<img className="photo" src={t}/>);
            case 20:
                return (<img className="photo" src={u}/>);
            case 21:
                return (<img className="photo" src={v}/>);
            case 22:
                return (<img className="photo" src={w}/>);
            case 23:
                return (<img className="photo" src={x}/>);
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