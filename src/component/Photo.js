import { Component } from "react";
import "../App.css"

const photo1 = new URL ("./../photo/beach.jpg", import.meta.url);
const photo2 = new URL ("./../photo/hd-wallpaper-1758197_640.jpg", import.meta.url);
const photo3 = new URL ("./../photo/hd-wallpaper-3021072_640.jpg", import.meta.url);
const photo4 = new URL ("./../photo/hd-wallpaper-3605547_640.jpg", import.meta.url);
const photo5 = new URL ("./../photo/maldives-1993704_640.jpg", import.meta.url);
const photo6 = new URL ("./../photo/sea-2361247_640.jpg", import.meta.url);

export default class Photo extends Component{

    render(){

        return (
          
            <div className="photo">
            <img className="photo_img" src={photo1} alt="1" />
            <img className="photo_img" src={photo2} alt="2" />
            <img className="photo_img" src={photo3} alt="3" />
            <img className="photo_img" src={photo4} alt="4" />
            <img className="photo_img" src={photo5} alt="5" />
            <img className="photo_img" src={photo6} alt="6" />
                
            </div>
          
        )
    }
}